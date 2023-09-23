import { Organization, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
	async index() {
		const organization = await prisma.organization.findMany({ select: { id: true, name: true } });
		return organization;
	},

	async creates(data: Organization): Promise<Organization> {
		const organization = await prisma.organization.create({
			data: { ...data },
		});
		return organization;
	},
};
