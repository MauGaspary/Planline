import { PrismaClient } from '@prisma/client';
import { Story } from '../dto/CreateSessionDTO.js';

const prisma = new PrismaClient();

export default {
	async getIdByStoryId(storyId: string) {
		return prisma.story.findUnique({
			where: {
				story_id: storyId,
			},
			select: {
				id: true,
			},
		});
	},
	async createMany(stories: Story[]) {
		await Promise.all(
			stories.map((story) => {
				const tasks = story.tasks.map((task) => ({
					task_id: task.task_id,
					name: task.name,
					points: 0,
				}));

				const storyDTO = {
					name: story.name,
					story_id: story.story_id,
					final_points: 0,
					tasks: {
						create: tasks,
					},
				};

				return prisma.story.create({
					data: storyDTO,
				});
			})
		);
	},

	async update(id: string, finalPoints: number) {
		return prisma.story.update({
			where: { story_id: id },
			data: {
				final_points: finalPoints,
			},
		});
	},

	async delete(storyId: string) {
		return prisma.story.delete({
			where: {
				id: storyId,
			},
		});
	},
};
