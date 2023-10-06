import projectRepository from '../repositories/projectRepository.js';
import { InfoDTO } from '../dto/InfoBody.js';

export default {
	async info(organization_id: string): Promise<InfoDTO[]> {
		const projects: InfoDTO[] = await projectRepository.info(organization_id);
		return projects;
	},
};
