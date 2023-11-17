import { Project, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
	async creates(data: Project): Promise<Project> {
		const project = await prisma.project.create({
			data: { ...data },
		});
		return project;
	},

	async create(data: Project): Promise<string> {
		const project = await prisma.project.create({
			data: { ...data },
		});
		return project.id;
	},
	async getByProjectId(projectId: string): Promise<Project | null> {
		const project: Project | null = await prisma.project.findFirst({
			where: {
				id: projectId,
			},
			include: {
				squads: true,
				Organization: true,
			},
		});
		return project;
	},
	async read(): Promise<Project[]> {
		const projects: Project[] = await prisma.project.findMany({
			include: {
				squads: true,
				Organization: true,
			},
		});
		return projects;
	},
	async delete(projectId: string): Promise<string> {
		const project = await prisma.project.delete({
			where: {
				id: projectId,
			},
		});
		return project.id;
	},

	async put(data: Project): Promise<string> {
		const project = await prisma.project.update({
			data: { ...data },
			where: {
				id: data.id,
			},
		});
		return project.id;
	},
};
