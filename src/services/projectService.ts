import projectRepository from '../repositories/projectRepository.js';
import { InfoDTO } from '../dto/InfoBody.js';

export default {
	async infoByOrganizationId(organization_id: string): Promise<InfoDTO[]> {
		const projects: InfoDTO[] = await projectRepository.infoByOrganizationId(organization_id);
		return projects;
	},
};
