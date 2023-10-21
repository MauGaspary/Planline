import { Squad, PrismaClient, User } from '@prisma/client';
import { InfoDTO } from '../dto/InfoBody';
import { CreateSquadDTO } from '../dto/CreateSquadDTO';

const prisma = new PrismaClient();

export default {
	async infoByProjectId(project_id: string): Promise<InfoDTO[]> {
		const projectSquadBridge = await prisma.projectSquadBridge.findMany({
			include: {
				Squad: true,
			},
			where: {
				project_id: project_id,
			},
		});
		const infoSquads: InfoDTO[] = projectSquadBridge.map((item) => {
			const { id, name } = item.Squad;
			return { id, name };
		});
		return infoSquads;
	},

	async create(data: CreateSquadDTO): Promise<string> {
		const squad = await prisma.squad.create({
			data: { ...data },
		});
		return squad.id;
	},

	async getAllUsers(squadId: string): Promise<User[]> {
		return (
			(
				await prisma.userSquadBridge.findMany({
					where: {
						squad_id: squadId,
					},
					select: {
						User: true,
					},
				})
			)?.map((bridge) => bridge.User) ?? ([] as User[])
		);
	},
};
