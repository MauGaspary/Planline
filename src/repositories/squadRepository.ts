import { PrismaClient, Squad } from '@prisma/client';
import { SquadDTO } from '../dto/SquadDTO';

const prisma = new PrismaClient();

export default {
	async create(data: Squad): Promise<string> {
		const squad = await prisma.squad.create({
			data: { ...data },
		});
		return squad.id;
	},

	async getBySquadId(squadId: string): Promise<SquadDTO | null> {
		const squad: SquadDTO | null = await prisma.squad.findFirst({
			where: {
				id: squadId,
			},
			include: {
				users: true,
				organization: true,
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

	async delete(squadId: string): Promise<void> {
		await prisma.squad.delete({
			where: {
				id: squadId,
			},
		});
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
