import projectRepository from '../repositories/projectRepository.js';
import { InfoDTO } from '../dto/InfoBody.js';
import { CreateProjectDTO } from 'src/dto/CreateProjectDTO.js';

export default {
	async infoByOrganizationId(organization_id: string): Promise<InfoDTO[]> {
		const projects: InfoDTO[] = await projectRepository.infoByOrganizationId(organization_id);
		return projects;
	},
	async create(project: CreateProjectDTO): Promise<string> {
		const projectId: string = await projectRepository.create(project);
		return projectId;
	},
};
