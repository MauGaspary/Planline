import { SessionCreationDto } from '../dto/CreateSessionDto.js';
import firebaseService from './firebaseService.js';
import { set, ref, get } from 'firebase/database';
import squadRepository from '../repositories/squadRepository.js';
import {
	FirebaseCollection,
	FirebaseSession,
	FirebaseStory,
	FirebaseTask,
	FirebaseUser,
} from '../dto/FirebaseDtos.js';
import storyRepository from '../repositories/storyRepository.js';
import taskRepository from '../repositories/taskRepository.js';
import voteRepository from '../repositories/voteRepository.js';

function generateFourDigitId(): string {
	return Math.floor(1000 + Math.random() * 9000).toString();
}

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
		const database = firebaseService.dbInstance;
		const sessionsRef = ref(database, '/sessions');

		const snapshot = await get(sessionsRef);

		if (snapshot.exists()) {
			return snapshot.val();
		} else {
			return null;
		}
	},

	async create(sessionCreationDto: SessionCreationDto): Promise<{ sessionId: string }> {
		const stories = sessionCreationDto.sprint.stories;
		const firebaseStories: FirebaseCollection<FirebaseStory> = {};

		for (const story of stories) {
			const firebaseTasks: FirebaseCollection<FirebaseTask> = {};

			for (const task of story.tasks) {
				firebaseTasks[task.task_id] = {
					description: task.name,
					final_vote: 0,
					votes: {},
				};
			}

			firebaseStories[story.story_id] = {
				name: story.name,
				tasks: firebaseTasks,
			};
		}

		const [users, sessionId] = await Promise.all([
			squadRepository.getAllUsers(sessionCreationDto.squad_id),
			this.createRandomId(),
			storyRepository.createMany(stories),
		]);

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

		const session: FirebaseSession = {
			finished: false,
			stories: firebaseStories,
			users: firebaseUsers,
			current_task: firstTask.task_id,
			current_story: firstStory.story_id,
		};

		const database = firebaseService.dbInstance;
		const sessionRef = ref(database, 'sessions/' + sessionId);

		await set(sessionRef, session);

		return { sessionId };
	},

	async finalizeWithoutSaving(sessionId: string) {
		const database = firebaseService.dbInstance;
		const finishedSession = ref(database, 'sessions/' + sessionId + '/finished');
		await set(finishedSession, true);
	},

	async finalize(sessionId: string) {
		const database = firebaseService.dbInstance;
		const sessionRef = ref(database, 'sessions/' + sessionId);

		const snapshot = await get(sessionRef);

		const promises = [];

		if (snapshot.exists()) {
			const session: FirebaseSession = snapshot.val();

			for (const storyId in session.stories) {
				const story = session.stories[storyId];

				const voteCount: { [key: number]: number } = {};

				for (const taskId in story.tasks) {
					const task = story.tasks[taskId];

					for (const votes in task.votes) {
						const vote = task.votes[votes];

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
										id: votes,
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
};
