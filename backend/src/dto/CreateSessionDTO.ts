export type Task = {
	task_id: string;
	name: string;
	final_vote: number;
};

export type Story = {
	story_id: string;
	name: string;
	tasks: Task[];
};

export type Sprint = {
	name: string;
	start_date: Date;
	end_date: Date;
	stories: Story[];
};

export type SessionCreationDTO = {
	organization_id: string;
	project_id: string;
	squad_id: string;
	squad_name: string;
	sprint: Sprint;
};
