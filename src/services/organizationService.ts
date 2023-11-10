import { CreateOrganizationDTO } from '../dto/CreateOrganizationDTO.js';
import { InfoDTO } from '../dto/InfoBody.js';
import organizationRepository from '../repositories/organizationRepository.js';
import { Organization } from '@prisma/client';
import { UpdateOrganizationDTO } from '../dto/UpdateOrganizationDTO.js';

export default {
	async info(): Promise<InfoDTO[]> {
		const organization = await organizationRepository.info();
		return organization;
	},
	async create(organization: CreateOrganizationDTO): Promise<string> {
		this.validateEmail(organization.email);
		const organizationId: string = await organizationRepository.create(organization);
		return organizationId;
	},
	async read(): Promise<Organization[]> {
		const orgs: Organization[] = await organizationRepository.read();
		return orgs;
	},
	async delete(orgId: string): Promise<void> {
		await organizationRepository.delete(orgId);
	},
	async put(organization: UpdateOrganizationDTO): Promise<string> {
		this.validateEmail(organization.email);
		const organizationId: string = await organizationRepository.put(organization);
		return organizationId;
	},
	validateEmail(email: string): void {
		const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		if (!expression.test(email)) {
			throw new Error('email is invalid');
		}
	},
};
