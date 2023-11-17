import squadRepository from '../repositories/squadRepository.js';
import { SquadDTO } from '../dto/SquadDTO.js';
import { Squad } from '@prisma/client';

export default {
	async create(squad: Squad): Promise<string> {
		const squadId: string = await squadRepository.create(squad);
		return squadId;
	},
	async getBySquadId(squadId: string): Promise<SquadDTO | null> {
		const squad: SquadDTO | null = await squadRepository.getBySquadId(squadId);
		return squad;
	},
	async read(): Promise<Squad[]> {
		const squads: Squad[] = await squadRepository.read();
		return squads;
	},
	async delete(squad: string): Promise<string> {
		const squadId: string = await squadRepository.delete(squad);
		return squadId;
	},
	async put(squad: Squad): Promise<string> {
		const squadId: string = await squadRepository.put(squad);
		return squadId;
	},
};
