import { PrismaClient } from '@prisma/client';
import { Sprint } from '../dto/CreateSessionDto';

const prisma = new PrismaClient();

export default {
	async createMany(sprint: Sprint) {
		const stories = sprint.stories.map((story) => ({
			name: story.name,
			story_id: story.story_id,
			final_points: 0,
			tasks: {
				create: story.tasks.map((task) => ({
					task_id: task.task_id,
					name: task.name,
					points: 0,
				})),
			},
		}));

		const sprintDto = {
			name: sprint.name,
			startDate: sprint.start_date,
			endDate: sprint.end_date,
			stories: {
				create: stories,
			},
		};

		await prisma.sprint.create({
			data: {
				name: sprint.name,
				startDate: sprint.start_date,
				endDate: sprint.end_date,
			},
		});
	},
};
