import squadRepository from '../repositories/squadRepository.js';
import { Squad } from '@prisma/client';

export default {
	async create(squad: Squad): Promise<string> {
		const squadId: string = await squadRepository.create(squad);
		return squadId;
	},
	async getBySquadId(squadId: string) {
		const squad: Squad | null = await squadRepository.getBySquadId(squadId);
		return squad;
	},
	async read(): Promise<Squad[]> {
		const squads: Squad[] = await squadRepository.read();
		return squads;
	},
	async delete(squadId: string): Promise<void> {
		await squadRepository.delete(squadId);
	},
	async put(squad: Squad): Promise<string> {
		const squadId: string = await squadRepository.put(squad);
		return squadId;
	},
};
