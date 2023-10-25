import { Project, PrismaClient } from '@prisma/client';
import { InfoDTO } from '../dto/InfoBody.js';
import { CreateProjectDTO } from 'src/dto/CreateProjectDTO.js';

const prisma = new PrismaClient();

export default {
	async infoByOrganizationId(organization_id: string): Promise<InfoDTO[]> {
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

	async create(data: CreateProjectDTO): Promise<string> {
		const project = await prisma.project.create({
			data: { ...data },
		});
		return project.id;
	},
	async read(): Promise<Project[]> {
		const projects: Project[] = await prisma.project.findMany();
		return projects;
	},
	async delete(projectId: string): Promise<void> {
		await prisma.project.delete({
			where: {
				id: projectId,
			},
		});
	},
};
