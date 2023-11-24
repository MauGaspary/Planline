export type CsvDownloadFilesDTO = {
	id: string;
	name: string;
	startDate: string;
	endDate: string;
	squadId: string | null;
	updated_at: string;
	created_at: string;
	stories: Stories[];
};

type Stories = {
	id: string;
	story_id: string;
	name: string;
	final_points: number;
	sprintId: string;
	updated_at: string;
	created_at: string;
	tasks: Tasks[];
};

type Tasks = {
	id: string;
	task_id: string;
	name: string;
	final_points: number;
	storyId: string;
	updated_at: string;
	created_at: string;
};
