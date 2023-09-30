import { Project } from '@prisma/client';
import projectRepository from '../repositories/projectRepository.js';

export default {
	async index(organization_id: string) {
		const projects: Array<Project> = await projectRepository.index(organization_id);
		return projects;
	},
};
