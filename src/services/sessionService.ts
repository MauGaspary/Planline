import { SessionCreationDTO } from '../dto/CreateSessionDTO.js';
import firebaseService from './firebaseService.js';
import { set, ref, get, child } from 'firebase/database';
import {
	FirebaseCollection,
	FirebaseGame,
	FirebaseSession,
	FirebaseStory,
	FirebaseTask,
	FirebaseTaskVote,
	FirebaseUser,
} from '../dto/FirebaseDTO.js';
import storyRepository from '../repositories/storyRepository.js';
import taskRepository from '../repositories/taskRepository.js';
import voteRepository from '../repositories/voteRepository.js';
import squadService from './squadService.js';

function generateFourDigitId(): string {
	return Math.floor(1000 + Math.random() * 9000).toString();
}

const database = firebaseService.dbInstance;
const sessionsRef = ref(database, '/sessions');

export default {
	async createRandomId(): Promise<string> {
		let randomId = generateFourDigitId();
		const sessions = await this.getAllCurrentSessions();

		if (sessions) {
			while (sessions[randomId]) {
				randomId = generateFourDigitId();
			}
		}

		return randomId;
	},

	async getAllCurrentSessions(): Promise<FirebaseCollection<FirebaseSession> | null> {
		const snapshot = await get(sessionsRef);

		if (snapshot.exists()) {
			return snapshot.val();
		} else {
			return null;
		}
	},

	async create(sessionCreationDTO: SessionCreationDTO): Promise<{ sessionId: string }> {
		const stories = sessionCreationDTO.sprint.stories;
		const firebaseStories: FirebaseCollection<FirebaseStory> = {};

		for (const story of stories) {
			const firebaseTasks: FirebaseCollection<FirebaseTask> = {};

			for (const task of story.tasks) {
				firebaseTasks[task.task_id] = {
					description: task.name,
				};
			}

			firebaseStories[story.story_id] = {
				name: story.name,
				tasks: firebaseTasks,
			};
		}

		const [squad, sessionId] = await Promise.all([
			squadService.getBySquadId(sessionCreationDTO.squad_id),
			this.createRandomId(),
			storyRepository.createMany(stories),
		]);

		const users = squad?.users ?? [];

		const firebaseUsers: FirebaseCollection<FirebaseUser> = {};

		for (const user of users) {
			firebaseUsers[user.id] = {
				name: user.name,
				level: user.level,
				firebase_auth_id: null,
			};
		}

		const firstStory = stories[0];
		const firstTask = firstStory.tasks[0];

		const firebaseGame: FirebaseGame = {
			finished: false,
			stories: firebaseStories,
			current_task: firstTask.task_id,
			current_story: firstStory.story_id,
			squad_id: sessionCreationDTO.squad_id,
			opened_at: new Date().toISOString(),
			sprint_name: sessionCreationDTO.sprint.name,
			squad_name: sessionCreationDTO.squad_name,
		};

		const session: FirebaseSession = {
			game: firebaseGame,
			users: firebaseUsers,
		};

		const sessionRef = child(sessionsRef, sessionId);

		await set(sessionRef, session);

		return { sessionId };
	},

	async finalizeWithoutSaving(sessionId: string) {
		const finishedSession = child(sessionsRef, sessionId + '/finished');
		await set(finishedSession, true);
	},

	async finalize(sessionId: string) {
		const sessionRef = child(sessionsRef, `${sessionId}`);

		const snapshot = await get(sessionRef);

		const promises = [];

		if (snapshot.exists()) {
			const session: FirebaseSession = snapshot.val();
			const game: FirebaseGame = session.game;

			const votes: FirebaseCollection<FirebaseTaskVote> = session.votes ?? {};

			for (const storyId in game.stories) {
				const story = game.stories[storyId];

				const voteCount: { [key: number]: number } = {};

				for (const taskId in story.tasks) {
					const task: FirebaseTaskVote | null = votes[taskId];

					if (!task) {
						continue;
					}

					for (const userId in task.votes) {
						const vote = task.votes[userId];

						promises.push(
							voteRepository.create({
								score: vote,
								Task: {
									connect: {
										task_id: taskId,
									},
								},
								User: {
									connect: {
										id: userId,
									},
								},
							})
						);
					}

					voteCount[task.final_vote] = voteCount[task.final_vote] + 1 || 1;

					promises.push(taskRepository.update(taskId, task.final_vote));
				}

				let average = 0;

				for (const vote in voteCount) {
					if (voteCount[vote] > average) {
						average = parseInt(vote);
					}
				}

				promises.push(storyRepository.update(storyId, average));
			}
		}

		promises.push(this.finalizeWithoutSaving(sessionId));
		await Promise.all(promises);
	},

	async available(squadId: string): Promise<string[]> {
		const snapshot = await get(sessionsRef);

		if (!snapshot.exists()) {
			return [];
		}

		const sessions: FirebaseCollection<FirebaseSession> = snapshot.val();

		return Object.entries(sessions)
			.filter((entry) => entry[1].game.squad_id === squadId && !entry[1].game.finished)
			.sort((a, b) => {
				const aDate = new Date(a[1].game.opened_at);
				const bDate = new Date(b[1].game.opened_at);

				return aDate.getTime() - bDate.getTime();
			})
			.slice(0, 6)
			.map((entry) => entry[0]);
	},
};
