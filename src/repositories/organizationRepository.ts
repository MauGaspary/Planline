import { Organization, PrismaClient } from '@prisma/client';
import { InfoDTO } from '../dto/InfoBody.js';

const prisma = new PrismaClient();

export default {
	async index(): Promise<InfoDTO[]> {
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
};
