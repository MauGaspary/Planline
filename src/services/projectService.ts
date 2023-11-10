import projectRepository from '../repositories/projectRepository.js';
import { Project } from '@prisma/client';

export default {
	async create(project: Project): Promise<string> {
		const projectId: string = await projectRepository.create(project);
		return projectId;
	},
	async read(): Promise<Project[]> {
		const projects: Project[] = await projectRepository.read();
		return projects;
	},
	async getByProjectId(projectId: string): Promise<Project | null> {
		const project: Project | null = await projectRepository.getByProjectId(projectId);
		return project;
	},
	async delete(projectId: string): Promise<void> {
		await projectRepository.delete(projectId);
	},
	async put(project: Project): Promise<string> {
		const projectId: string = await projectRepository.put(project);
		return projectId;
	},
};
