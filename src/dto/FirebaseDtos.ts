export type FirebaseCollection<T> = {
	[key: string]: T;
};

export type FirebaseSession = {
	current_task?: string;
	finished: boolean;
	stories: FirebaseCollection<FirebaseStory>;
	users: FirebaseCollection<FirebaseUser>;
};

export type FirebaseStory = {
	name: string;
	tasks: FirebaseCollection<FirebaseTask>;
};

export type FirebaseTask = {
	descritpion: string;
	final_vote: number;
	votes: FirebaseCollection<number>;
};

export type FirebaseUser = {
	name: string;
	level: string;
	firebase_auth_id: string | null;
};
