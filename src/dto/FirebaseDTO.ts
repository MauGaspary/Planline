export type FirebaseCollection<T> = {
	[key: string]: T;
};

export type FirebaseSession = {
	game: FirebaseGame;
	users: FirebaseCollection<FirebaseUser>;
};

export type FirebaseGame = {
	current_task: string;
	current_story: string;
	finished: boolean;
	squad_id: string;
	opened_at: string;
	stories: FirebaseCollection<FirebaseStory>;
	squad_name: string;
	sprint_name: string;
};

export type FirebaseStory = {
	name: string;
	tasks: FirebaseCollection<FirebaseTask>;
};

export type FirebaseTask = {
	description: string;
	final_vote: number;
	votes: FirebaseCollection<number>;
};

export type FirebaseUser = {
	name: string;
	level: string;
	firebase_auth_id: string | null;
};
