import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
	async update(id: string, points: number) {
		return prisma.task.update({
			where: { task_id: id },
			data: {
				points,
			},
		});
	},
};
