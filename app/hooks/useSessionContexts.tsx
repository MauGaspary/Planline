import { child, off, onValue, ref, set } from 'firebase/database';
import { ReactNode, createContext, useContext, useEffect, useReducer } from 'react';

import { realtimeDatabase } from '../services/firebase';

export type Session = {
	current_story: string;
	current_task: string;
	finished: boolean;
	stories: {
		[key: string]: Story;
	};
	users: {
		[key: string]: User;
	};
	sprint_name: string;
	squad_name: string;
};

export type Story = {
	name: string;
	tasks: {
		[key: string]: Task;
	};
};

export type Task = {
	description: string;
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

type SessionUser = {
	userId: string;
	firebase_auth_id: string;
};

export type CurrentUser = {
	id: string;
	user: User;
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
	  }
	| {
			type: 'CLOSE_SESSION';
	  }
	| {
			type: 'CLEAR';
	  };

type ContextState = {
	session: Session | null;
	user: CurrentUser | null;
	sessionId: number | null;
	close: boolean;
};

const sessionsRef = ref(realtimeDatabase(), 'sessions');

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
		close: false,
	});

	useEffect(() => {
		if (!state.sessionId) return;

		onValue(child(sessionsRef, state.sessionId.toString()), (snapshot) => {
			const session = snapshot.val();

			if (!session) return;

			dispatch({ type: 'SET_SESSION', payload: session });
		});
	}, [state.sessionId]);

	useEffect(() => {
		if (state.close) {
			if (!state.sessionId) return;
			off(child(sessionsRef, state.sessionId.toString()));
			dispatch({ type: 'CLEAR' });
		}
	}, [state.close]);

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

			return { ...state, user: { id: action.payload.userId, user } };
		case 'CLOSE_SESSION':
			return { ...state, close: true };
		case 'CLEAR':
			return { session: null, user: null, sessionId: null, close: false };
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
