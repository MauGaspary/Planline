import { Request, Response } from 'express';
import loggerService from '../services/loggerService.js';
import sprintService from '../services/sprintService.js';
import { Sprint } from '@prisma/client';

export default {
	async index(req: Request, res: Response) {
		try {
			const sprints: Sprint[] = await sprintService.index();
			loggerService.info('RESPONSE', sprints);
			res.status(200).json(sprints);
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao buscar sprints.' });
		}
	},
};
