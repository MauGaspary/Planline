import squadRepository from '../repositories/squadRepository.js';
import { InfoDTO } from '../dto/InfoBody.js';

export default {
	async info(project_id: string): Promise<InfoDTO[]> {
		const projects: InfoDTO[] = await squadRepository.info(project_id);
		return projects;
	},
};
