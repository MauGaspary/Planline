import { Squad, PrismaClient, User } from '@prisma/client';
import { InfoDTO } from '../dto/InfoBody';

const prisma = new PrismaClient();

export default {
	async infoByProjectId(project_id: string): Promise<InfoDTO[]> {
		const projectSquadBridge = await prisma.projectSquadBridge.findMany({
			where: {
				project_id: project_id,
			},
			select: {
				Squad: {
					select: {
						id: true,
						name: true,
					},
				},
			},
		});
		const infoSquads: InfoDTO[] = projectSquadBridge.map((item) => item.Squad);
		return infoSquads;
	},

	async creates(data: Squad): Promise<Squad> {
		const project = await prisma.squad.create({
			data: { ...data },
		});
		return project;
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
