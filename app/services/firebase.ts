import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';

const {
	EXPO_PUBLIC_API_KEY,
	EXPO_PUBLIC_AUTH_DOMAIN,
	EXPO_PUBLIC_PROJECT_ID,
	EXPO_PUBLIC_STORAGE_BUCKET,
	EXPO_PUBLIC_MESSAGING_SENDER_ID,
	EXPO_PUBLIC_APP_ID,
} = process.env;

const firebaseConfig = {
	apiKey: EXPO_PUBLIC_API_KEY,
	authDomain: EXPO_PUBLIC_AUTH_DOMAIN,
	projectId: EXPO_PUBLIC_PROJECT_ID ?? '',
	storageBucket: EXPO_PUBLIC_STORAGE_BUCKET,
	messagingSenderId: EXPO_PUBLIC_MESSAGING_SENDER_ID,
	appId: EXPO_PUBLIC_APP_ID ?? '',
};

firebase.initializeApp(firebaseConfig);

export function realtimeDatabase() {
	return database();
}
