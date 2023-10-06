import { Request, Response } from 'express';
import squadService from '../services/squadService.js';
import { InfoDTO } from '../dto/InfoBody.js';
import { Prisma } from '@prisma/client';

export default {
	async info(req: Request, res: Response) {
		try {
			const project_id: string = req.params.project_id;
			const squads: InfoDTO[] = await squadService.info(project_id);
			res.json(squads);
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				res.status(500).json({
					error: e.message,
					...e.meta,
				});
			}
		}
	},
};
