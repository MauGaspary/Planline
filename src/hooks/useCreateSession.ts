import { useRealtimeDatabase } from './useFirebase';
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
	descritpion: string;
	final_vote: number;
	votes: {
		[key: string]: number;
	};
};

export type User = {
	name: string;
	level: string;
	firebase_auth_id: string;
};

export async function useCreateSession(sessionId: string) {
	const session: Session = {
		finished: false,
		stories: {},
		users: {},
	};

	const database = useRealtimeDatabase();
	const sessionRef = ref(database, 'sessions/' + sessionId);

	set(sessionRef, session);
}
