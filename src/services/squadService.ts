import squadRepository from '../repositories/squadRepository.js';
import { InfoDTO } from '../dto/InfoBody.js';

export default {
	async infoByProjectId(project_id: string): Promise<InfoDTO[]> {
		squadRepository.create();

		const projects: InfoDTO[] = await squadRepository.infoByProjectId(project_id);
		return projects;
	},
};
