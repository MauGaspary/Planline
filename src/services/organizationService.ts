import { InfoDTO } from '../dto/InfoBody.js';
import organizationRepository from '../repositories/organizationRepository.js';

export default {
	async info(): Promise<InfoDTO[]> {
		const organization = await organizationRepository.info();
		return organization;
	},
};
