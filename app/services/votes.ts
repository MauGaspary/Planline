import { ref, set } from 'firebase/database';
import { realtimeDatabase } from './firebase';

const database = realtimeDatabase();

export async function vote(sessionId: number, taskId: string, userId: string, value: number) {
	const voteRef = ref(database, `/sessions/${sessionId}/votes/${taskId}/votes/${userId}`);

	await set(voteRef, value);
}
