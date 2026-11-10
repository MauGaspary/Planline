import organizationRepository from '../repositories/organizationRepository.js';
import { Organization } from '@prisma/client';

export default {
	async create(organization: Organization): Promise<string> {
		this.validateEmail(organization.email);
		const organizationId: string = await organizationRepository.create(organization);
		return organizationId;
	},
	async read(): Promise<Organization[]> {
		const orgs: Organization[] = await organizationRepository.read();
		return orgs;
	},
	async getByOrganizationId(organizationId: string): Promise<Organization | null> {
		const organization: Organization | null =
			await organizationRepository.getByOrganizationId(organizationId);
		return organization;
	},
	async delete(org: string): Promise<string> {
		const orgId: string = await organizationRepository.delete(org);
		return orgId;
	},
	async put(organization: Organization): Promise<string> {
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
