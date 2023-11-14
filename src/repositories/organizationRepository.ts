import { Organization, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
	async creates(data: Organization): Promise<Organization> {
		const organization = await prisma.organization.create({
			data: { ...data },
		});
		return organization;
	},
	async create(data: Organization): Promise<string> {
		const organization = await prisma.organization.create({
			data: { ...data },
		});
		return organization.id;
	},
	async getByOrganizationId(organizationId: string): Promise<Organization | null> {
		const organization: Organization | null = await prisma.organization.findFirst({
			where: {
				id: organizationId,
			},
			include: {
				projects: true,
			},
		});
		return organization;
	},
	async read(): Promise<Organization[]> {
		const orgs: Organization[] = await prisma.organization.findMany({
			include: {
				projects: true,
			},
		});
		return orgs;
	},
	async delete(organizationId: string): Promise<string> {
		const organization = await prisma.organization.delete({
			where: {
				id: organizationId,
			},
		});
		return organization.id;
	},
	async put(data: Organization): Promise<string> {
		const organization = await prisma.organization.update({
			data: { ...data },
			where: {
				id: data.id,
			},
		});
		return organization.id;
	},
};
