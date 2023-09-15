import { ReactNode, createContext, useContext, useReducer } from 'react';

export type Session = {
	id: number;
	current_task?: string;
	finished: boolean;
	stories: Story[];
	users: User[];
};

export type Story = {
	id: number;
	name: string;
	tasks: Task[];
};

export type Task = {
	id: number;
	descritpion: string;
	final_vote: number;
	votes: {
		[key: string]: number;
	};
};

export type User = {
	id: number;
	name: string;
	level: string;
	firebase_auth_id?: string;
};

type SessionUser = {
	userId: number;
	firebase_auth_id: string;
};

type Action =
	| { type: 'SET_SESSION_NUMBER'; payload: number }
	| { type: 'SET_USER_FIREBASE_AUTH'; payload: SessionUser }
	| { type: 'SET_TASK'; payload: string };

const SessionContext = createContext<
	{ state: Session; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

const initialState: Session = {
	id: 0,
	current_task: '',
	finished: false,
	stories: [],
	users: [
		{
			id: 1,
			name: 'Cássio Trindade',
			level: 'Estagiário',
		},
		{
			id: 2,
			name: 'Augusto Linhares',
			level: 'Desenvolvedor Senior',
		},
		{
			id: 3,
			name: 'Leticia Reis',
			level: 'UI/UX Designer',
		},
		{
			id: 4,
			name: 'John Doe',
			level: 'Desenvolvedor Junior',
		},
		{
			id: 5,
			name: 'John Doe',
			level: 'Desenvolvedor Senior',
		},
		{
			id: 6,
			name: 'John Doe',
			level: 'Desenvolvedor Senior',
		},
		{
			id: 7,
			name: 'John Doe',
			level: 'Desenvolvedor Junior',
		},
	],
};

interface AppProviderProps {
	children: ReactNode;
}

export const SessionProvider = ({ children }: AppProviderProps) => {
	const [state, dispatch] = useReducer(sessionReducer, initialState);
	return <SessionContext.Provider value={{ state, dispatch }}>{children}</SessionContext.Provider>;
};

export const useSession = () => {
	const context = useContext(SessionContext);
	if (context === undefined) {
		throw new Error('useSession must be used with asign Session');
	}
	return context;
};

const sessionReducer = (state: Session, action: Action): Session => {
	switch (action.type) {
		case 'SET_SESSION_NUMBER':
			return { ...state, id: action.payload };
		case 'SET_USER_FIREBASE_AUTH':
			return {
				...state,
				users: state.users.map((user: User) => {
					if (user.id == action.payload.userId) {
						return {
							...user,
							firebase_auth_id: action.payload.firebase_auth_id,
						};
					}
					return user;
				}),
			};
		case 'SET_TASK':
			return { ...state, current_task: action.payload };
		default:
			return state;
	}
};
