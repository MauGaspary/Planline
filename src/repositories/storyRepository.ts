import { PrismaClient } from '@prisma/client';
import { Story } from '../dto/CreateSessionDto';

const prisma = new PrismaClient();

export default {
	async createMany(stories: Story[]) {
		await Promise.all(
			stories.map((story) => {
				const tasks = story.tasks.map((task) => ({
					task_id: task.task_id,
					name: task.name,
					points: 0,
				}));

				const storyDto = {
					name: story.name,
					story_id: story.story_id,
					final_points: 0,
					tasks: {
						create: tasks,
					},
				};

				return prisma.story.create({
					data: storyDto,
				});
			})
		);
	},

	async updateMany(stories: Story[]) {
		await Promise.all([
			stories.map((story) => {
				const tasks = story.tasks.map((task) => ({
					task_id: task.task_id,
					name: task.name,
					points: task.final_vote,
				}));

				const storyDto = {
					name: story.name,
					story_id: story.story_id,
					final_points: 0,
					tasks: {
						create: tasks,
					},
				};

				return prisma.story.updateMany({
					where: {
						story_id: story.story_id,
					},
					data: storyDto,
				});
			}),
		]);
	},
};
