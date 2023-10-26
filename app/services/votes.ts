import { ref, set } from 'firebase/database';
import { realtimeDatabase } from './firebase';

const database = realtimeDatabase();

export async function vote(
	sessionId: number,
	storyId: string,
	taskId: string,
	userId: string,
	value: number
) {
	const voteRef = ref(
		database,
		`/sessions/${sessionId}/stories/${storyId}/tasks/${taskId}/votes/${userId}`
	);

	await set(voteRef, value);
}
