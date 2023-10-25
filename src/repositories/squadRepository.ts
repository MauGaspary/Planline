import { PrismaClient, Squad, User } from '@prisma/client';
import { InfoDTO } from '../dto/InfoBody';
import { CreateSquadDTO } from '../dto/CreateSquadDTO';
import { UpdateSquadDTO } from '../dto/UpdateSquadDTO';

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

	async create(data: CreateSquadDTO): Promise<string> {
		const squad = await prisma.squad.create({
			data: { ...data },
		});
		return squad.id;
	},

	async read(): Promise<Squad[]> {
		const squads: Squad[] = await prisma.squad.findMany();
		return squads;
	},

	async delete(squadId: string): Promise<void> {
		await prisma.squad.delete({
			where: {
				id: squadId,
			},
		});
	},

	async put(data: UpdateSquadDTO): Promise<string> {
		const squad = await prisma.squad.update({
			data: { ...data },
			where: {
				id: data.id,
			},
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
