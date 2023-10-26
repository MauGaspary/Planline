import { Organization, PrismaClient } from '@prisma/client';
import { InfoDTO } from '../dto/InfoBody.js';
import { CreateOrganizationDTO } from '../dto/CreateOrganizationDTO.js';
import { UpdateOrganizationDTO } from '../dto/UpdateOrganizationDTO.js';

const prisma = new PrismaClient();

export default {
	async info(): Promise<InfoDTO[]> {
		const organization: InfoDTO[] = await prisma.organization.findMany({
			select: {
				id: true,
				name: true,
			},
		});
		return organization;
	},

	async creates(data: Organization): Promise<Organization> {
		const organization = await prisma.organization.create({
			data: { ...data },
		});
		return organization;
	},
	async create(data: CreateOrganizationDTO): Promise<string> {
		const organization = await prisma.organization.create({
			data: { ...data },
		});
		return organization.id;
	},
	async read(): Promise<Organization[]> {
		const orgs: Organization[] = await prisma.organization.findMany();
		return orgs;
	},
	async delete(organizationId: string): Promise<void> {
		await prisma.organization.delete({
			where: {
				id: organizationId,
			},
		});
	},
	async put(data: UpdateOrganizationDTO): Promise<string> {
		const organization = await prisma.organization.update({
			data: { ...data },
			where: {
				id: data.id,
			},
		});
		return organization.id;
	},
};
