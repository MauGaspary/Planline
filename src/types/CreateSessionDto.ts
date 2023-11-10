export type Task = {
	task_id: string;
	name: string;
};

export type Story = {
	story_id: string;
	name: string;
	tasks: Task[];
};

type Sprint = {
	name: string;
	start_date: Date;
	end_date: Date;
	stories: Story[];
};

export type SessionCreationDto = {
	organization_id: string;
	project_id: string;
	squad_id: string;
	sprint: Sprint;
	squad_name: string;
};

export type SessionCreationResponseDto = {
	sessionId: string;
};
