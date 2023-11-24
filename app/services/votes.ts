import { realtimeDatabase } from './firebase';

export async function vote(sessionId: number, taskId: string, userId: string, value: number) {
	const ref = `/sessions/${sessionId}/votes/${taskId}/votes/${userId}`;
	realtimeDatabase().ref(ref).set(value);
}
