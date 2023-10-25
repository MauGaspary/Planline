import { Organization, PrismaClient } from '@prisma/client';
import { InfoDTO } from '../dto/InfoBody.js';
import { CreateOrganizationDTO } from 'src/dto/CreateOrganizationDTO.js';

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
};
