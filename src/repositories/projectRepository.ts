import { Project, PrismaClient } from '@prisma/client';
import { InfoDTO } from '../dto/InfoBody.js';

const prisma = new PrismaClient();

export default {
	async info(organization_id: string): Promise<InfoDTO[]> {
		const project = await prisma.project.findMany({
			select: {
				id: true,
				name: true,
			},
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
