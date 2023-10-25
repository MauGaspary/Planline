import { CreateOrganizationDTO } from 'src/dto/CreateOrganizationDTO.js';
import { InfoDTO } from '../dto/InfoBody.js';
import organizationRepository from '../repositories/organizationRepository.js';
import { Organization } from '@prisma/client';

export default {
	async info(): Promise<InfoDTO[]> {
		const organization = await organizationRepository.info();
		return organization;
	},
	async create(organization: CreateOrganizationDTO): Promise<string> {
		const organizationId: string = await organizationRepository.create(organization);
		return organizationId;
	},
	async read(): Promise<Organization[]> {
		const orgs: Organization[] = await organizationRepository.read();
		return orgs;
	},
};
