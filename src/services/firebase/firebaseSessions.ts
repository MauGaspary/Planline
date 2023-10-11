import { getRealtimeDatabase } from './firebase';
import { set, ref } from 'firebase/database';

export type Session = {
	current_task?: string;
	finished: boolean;
	stories: {
		[key: string]: Story;
	};
	users: {
		[key: string]: User;
	};
};

export type Story = {
	name: string;
	tasks: {
		[key: string]: Task;
	};
};

export type Task = {
	name: string;
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
