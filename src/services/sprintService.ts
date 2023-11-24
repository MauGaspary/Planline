import sprintRepository from '../repositories/sprintRepository.js';

import { Sprint } from '@prisma/client';

export default {
	async index(): Promise<Sprint[]> {
		return sprintRepository.index();
	},
};
