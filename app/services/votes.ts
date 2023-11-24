import database from '@react-native-firebase/database';

export async function vote(sessionId: number, taskId: string, userId: string, value: number) {
	const ref = `/sessions/${sessionId}/votes/${taskId}/votes/${userId}`;
	database().ref(ref).set(value);
}
