import { InfoDTO } from '../dto/InfoBody.js';
import organizationRepository from '../repositories/organizationRepository.js';

export default {
	async index(): Promise<InfoDTO[]> {
		const organization = await organizationRepository.index();
		return organization;
	},
};
