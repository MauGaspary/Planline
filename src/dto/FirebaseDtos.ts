export type FirebaseCollection<T> = {
	[key: string]: T;
};

export type FirebaseSession = {
	current_task: string;
	current_story: string;
	finished: boolean;
	stories: FirebaseCollection<FirebaseStory>;
	users: FirebaseCollection<FirebaseUser>;
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
