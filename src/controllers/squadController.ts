import { Request, Response } from 'express';
import squadService from '../services/squadService.js';
import { InfoDTO } from '../dto/InfoBody.js';
import { Prisma } from '@prisma/client';
import { CreateSquadDTO } from '../dto/CreateSquadDTO.js';

export default {
	async infoByProjectId(req: Request, res: Response) {
		try {
			const project_id: string = req.params.project_id;
			const squads: InfoDTO[] = await squadService.infoByProjectId(project_id);
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
	async create(req: Request, res: Response) {
		try {
			const squad: CreateSquadDTO = req.body;
			const squadId: string = await squadService.create(squad);
			res.json({ squadId: squadId });
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
