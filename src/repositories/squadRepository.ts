import { Squad, PrismaClient } from '@prisma/client';
import { InfoDTO } from '../dto/InfoBody';

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

	async creates(data: Squad): Promise<Squad> {
		const project = await prisma.squad.create({
			data: { ...data },
		});
		return project;
	},
};
