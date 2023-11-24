import { PrismaClient, Sprint as SprintPrisma } from '@prisma/client';

import { Sprint as SprintDTO } from '../dto/CreateSessionDTO';

const prisma = new PrismaClient();

export default {
	async create(sprint: SprintDTO, squadId: string) {
		const sprintDTO = {
			name: sprint.name,
			startDate: sprint.start_date,
			endDate: sprint.end_date,
			squadId: squadId,
		};

		const sprintObj: SprintPrisma = await prisma.sprint.create({
			data: { ...sprintDTO },
		});

		return sprintObj.id;
	},

	async index(): Promise<SprintPrisma[]> {
		const sprints: SprintPrisma[] = await prisma.sprint.findMany({
			include: {
				stories: {
					include: {
						tasks: true,
					},
				},
			},
		});

		return sprints;
	},
	async delete(sprintId: string) {
		return prisma.sprint.delete({
			where: {
				id: sprintId,
			},
		});
	},
};
