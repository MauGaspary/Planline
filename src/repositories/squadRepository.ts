import { PrismaClient, Squad } from '@prisma/client';

const prisma = new PrismaClient();

export default {
	async create(data: Squad): Promise<string> {
		const squad = await prisma.squad.create({
			data: { ...data },
		});
		return squad.id;
	},

	async getBySquadId(squadId: string): Promise<Squad | null> {
		const squad: Squad | null = await prisma.squad.findFirst({
			where: {
				id: squadId,
			},
			include: {
				organization: true,
				users: true,
			},
		});
		return squad;
	},

	async read(): Promise<Squad[]> {
		const squads: Squad[] = await prisma.squad.findMany({
			include: {
				users: true,
				organization: true,
			},
		});
		return squads;
	},

	async delete(squadId: string): Promise<string> {
		const squad = await prisma.squad.delete({
			where: {
				id: squadId,
			},
		});
		return squad.id;
	},

	async put(data: Squad): Promise<string> {
		const squad = await prisma.squad.update({
			data: { ...data },
			where: {
				id: data.id,
			},
		});
		return squad.id;
	},
};
