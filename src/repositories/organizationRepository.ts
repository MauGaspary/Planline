import { Organization, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
	async index(): Promise<Organization[]> {
		const organization: Organization[] = await prisma.organization.findMany({ 
			select: { 
				id: true,
				name: true 
			}}) as Organization[];
		return organization;
	},

	async creates(data: Organization): Promise<Organization> {
		const organization = await prisma.organization.create({
			data: { ...data },
		});
		return organization;
	},
};
