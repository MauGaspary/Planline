import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const {
	FIREBASE_API_KEY,
	FIREBASE_AUTH_DOMAIN,
	FIREBASE_PROJECT_ID,
	FIREBASE_STORAGE_BUCKET,
	FIREBASE_MESSAGING_SENDER_ID,
	FIREBASE_APP_ID,
	FIREBASE_MEASUREMENT_ID,
	FIREBASE_DATABASE_URL,
} = process.env;

const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: FIREBASE_AUTH_DOMAIN,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_STORAGE_BUCKET,
	messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
	appId: FIREBASE_APP_ID,
	measurementId: FIREBASE_MEASUREMENT_ID,
	databaseURL: FIREBASE_DATABASE_URL,
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export default {
	instance: firebase,
	dbInstance: database,
};
