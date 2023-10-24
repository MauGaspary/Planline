import storyRepository from '../repositories/storyRepository.js';
import { SessionCreationDto } from '../dto/CreateSessionDto.js';
import firebaseService from './firebaseService.js';
import { set, ref, get, child } from 'firebase/database';
import squadRepository from '../repositories/squadRepository.js';
import {
	FirebaseCollection,
	FirebaseSession,
	FirebaseStory,
	FirebaseTask,
	FirebaseUser,
} from '../dto/FirebaseDtos.js';

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
					descritpion: '',
					final_vote: 0,
					votes: {},
				};
			}

			firebaseStories[story.story_id] = {
				name: story.name,
				tasks: firebaseTasks,
			};
		}

		console.log(firebaseStories);

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

		const session: FirebaseSession = {
			finished: false,
			stories: firebaseStories,
			users: firebaseUsers,
		};

		const database = firebaseService.dbInstance;
		const sessionRef = ref(database, 'sessions/' + sessionId);

		await set(sessionRef, session);

		console.log(sessionId);

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

		if (snapshot.exists()) {
			const session: FirebaseSession = snapshot.val();

			const stories = [];

			for (const storyId in session.stories) {
				const story = session.stories[storyId];

				const tasks = [];

				for (const taskId in story.tasks) {
					const task = story.tasks[taskId];

					const votes = [];

					for (const userId in task.votes) {
						votes.push(task.votes[userId]);
					}

					tasks.push({
						task_id: taskId,
						final_vote: task.final_vote,
						votes,
					});
				}

				stories.push({
					story_id: storyId,
					tasks,
				});
			}
		}

		await set(child(sessionRef, 'finished'), true);
	},
};
