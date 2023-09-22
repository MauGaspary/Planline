import { Organization } from '@prisma/client';
import organizationRepository from '../repositories/organizationRepository.js';

export default {
	async index() {
		const organization: Array<Organization> = await organizationRepository.index();
		return organization;
	},
};
