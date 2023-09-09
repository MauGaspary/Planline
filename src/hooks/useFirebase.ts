// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: '[REMOVED]',
	authDomain: 'ages-test-ce94c.firebaseapp.com',
	databaseURL: 'https://ages-test-ce94c-default-rtdb.firebaseio.com',
	projectId: 'ages-test-ce94c',
	storageBucket: 'ages-test-ce94c.appspot.com',
	messagingSenderId: '834015135167',
	appId: '1:834015135167:web:e9091f621db955b0c68d0a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function useRealtimeDatabase() {
	return database;
}
