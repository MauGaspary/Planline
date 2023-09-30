import { Project, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
	async index(organization_id: string): Promise<Array<Project>> {
		const project = await prisma.project.findMany({
			where: {
				organization_id: organization_id,
			},
		});
		return project;
	},

	async creates(data: Project): Promise<Project> {
		const project = await prisma.project.create({
			data: { ...data },
		});
		return project;
	},
};
