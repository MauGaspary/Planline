import { child, onValue, ref, set } from 'firebase/database';
import { ReactNode, createContext, useContext, useEffect, useReducer } from 'react';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const {
	VITE_API_KEY,
	VITE_AUTH_DOMAIN,
	VITE_PROJECT_ID,
	VITE_STORAGE_BUCKET,
	VITE_MESSAGING_SENDER_ID,
	VITE_APP_ID,
} = process.env;

const firebaseConfig = {
	apiKey: VITE_API_KEY,
	authDomain: VITE_AUTH_DOMAIN,
	projectId: VITE_PROJECT_ID,
	storageBucket: VITE_STORAGE_BUCKET,
	messagingSenderId: VITE_MESSAGING_SENDER_ID,
	appId: VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

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
	firebase_auth_id?: string;
};

type SessionUser = {
	userId: number;
	firebase_auth_id: string;
};

type SessionAction =
	| {
			type: 'SET_SESSION_ID';
			payload: number;
	  }
	| {
			type: 'SET_SESSION';
			payload: Session;
	  }
	| {
			type: 'SET_USER';
			payload: SessionUser;
	  };

type ContextState = {
	session: Session | null;
	user: User | null;
	sessionId: number | null;
};

const sessionsRef = ref(database, 'sessions');

type SessionContextType = {
	state: ContextState;
	dispatch: React.Dispatch<SessionAction>;
};

export const SessionContext = createContext<SessionContextType>({} as SessionContextType);

export const SessionProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(sessionReducer, {
		session: null,
		user: null,
		sessionId: null,
	});

	useEffect(() => {
		if (!state.sessionId) return;

		onValue(child(sessionsRef, state.sessionId.toString()), (snapshot) => {
			const session = snapshot.val();

			if (!session) return;

			dispatch({ type: 'SET_SESSION', payload: session });
		});
	}, [state.sessionId]);

	return <SessionContext.Provider value={{ state, dispatch }}>{children}</SessionContext.Provider>;
};

function sessionReducer(state: ContextState, action: SessionAction): ContextState {
	let user;

	switch (action.type) {
		case 'SET_SESSION_ID':
			return { ...state, sessionId: action.payload };
		case 'SET_SESSION':
			return { ...state, session: action.payload };
		case 'SET_USER':
			if (!state?.session) return { ...state };
			user = state.session.users[action.payload.userId];

			set(
				child(sessionsRef, `${state.sessionId}/users/${action.payload.userId}/firebase_auth_id`),
				action.payload.firebase_auth_id
			);

			return { ...state, user };
		default:
			return { ...state };
	}
}

export function useAppContext() {
	const context = useContext(SessionContext);

	if (!context) {
		throw new Error('useDispatcher must be used within a SessionProvider');
	}

	return context;
}
