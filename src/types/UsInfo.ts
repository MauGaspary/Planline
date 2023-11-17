export type Task = {
	id: string;
	name: string;
};

export type US = {
	id: string;
	name: string;
};

export type UsInfo = {
	us: US;
	tasks: Task[];
};
