import organizationRepository from '../repositories/organizationRepository.js';

export default {
	async index() {
		const organization = await organizationRepository.index();
		return organization;
	},
};
