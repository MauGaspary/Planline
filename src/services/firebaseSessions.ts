import { getRealtimeDatabase } from './firebase';
import { set, ref } from 'firebase/database';

export type Session = {
	game: Game;
	users: {
		[key: string]: User;
	};
};

export type Game = {
	current_story: string;
	current_task: string;
	finished: boolean;
	stories: {
		[key: string]: Story;
	};
};

export type Story = {
	name: string;
	tasks: {
		[key: string]: Task;
	};
};

export type Task = {
	description: string;
	final_vote: number;
	votes: {
		[key: string]: number;
	};
};

export type User = {
	name: string;
	level: string;
	firebase_auth_id: string | null;
};

export async function finishFirebaseSession(sessionId: string) {
	const database = getRealtimeDatabase();
	const sessionRef = ref(database, 'sessions/' + sessionId);

	// TODO: remove this when backend is ready
	// Use this insted: await set(sessionRef, { finished: true });
	await set(sessionRef, null);
}
