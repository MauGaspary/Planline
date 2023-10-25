import squadRepository from '../repositories/squadRepository.js';
import { InfoDTO } from '../dto/InfoBody.js';
import { CreateSquadDTO } from '../dto/CreateSquadDTO.js';
import { Squad } from '@prisma/client';
import { UpdateSquadDTO } from '../dto/UpdateSquadDTO.js';

export default {
	async infoByProjectId(project_id: string): Promise<InfoDTO[]> {
		const projects: InfoDTO[] = await squadRepository.infoByProjectId(project_id);
		return projects;
	},

	async create(squad: CreateSquadDTO): Promise<string> {
		const squadId: string = await squadRepository.create(squad);
		return squadId;
	},

	async read(): Promise<Squad[]> {
		const squads: Squad[] = await squadRepository.read();
		return squads;
	},
	async delete(squadId: string): Promise<void> {
		await squadRepository.delete(squadId);
	},
	async put(squad: UpdateSquadDTO): Promise<string> {
		const squadId: string = await squadRepository.put(squad);
		return squadId;
	},
};
