import { CreateOrganizationDTO } from 'src/dto/CreateOrganizationDTO.js';
import { InfoDTO } from '../dto/InfoBody.js';
import organizationRepository from '../repositories/organizationRepository.js';

export default {
	async info(): Promise<InfoDTO[]> {
		const organization = await organizationRepository.info();
		return organization;
	},
	async create(organization: CreateOrganizationDTO): Promise<string> {
		const organizationId: string = await organizationRepository.create(organization);
		return organizationId;
	},
};
