import projectRepository from '../repositories/projectRepository.js';
import { InfoDTO } from '../dto/InfoBody.js';

export default {
	async index(organization_id: string): Promise<InfoDTO[]> {
		const projects: InfoDTO[] = await projectRepository.index(organization_id);
		return projects;
	},
};
