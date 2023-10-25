import { PrismaClient } from '@prisma/client';
import { ProjectSquadBridge } from '../dto/ProjectSquadBridge';

const prisma = new PrismaClient();

export default {
	async create(projectSquadBridge: ProjectSquadBridge): Promise<void> {
		projectSquadBridge.projects.forEach(async (projectId) => {
			console.log(projectId);
			console.log(projectSquadBridge.squadId);
			await prisma.projectSquadBridge.create({
				data: {
					squad_id: projectSquadBridge.squadId,
					project_id: projectId,
					updated_at: new Date(),
				},
			});
		});
	},
};
