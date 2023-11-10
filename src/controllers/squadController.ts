import { Request, Response } from 'express';
import squadService from '../services/squadService.js';
import { InfoDTO } from '../dto/InfoBody.js';
import { Prisma, Squad } from '@prisma/client';
import { CreateSquadDTO } from '../dto/CreateSquadDTO.js';
import { UpdateSquadDTO } from 'src/dto/UpdateSquadDTO.js';

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
			res.status(201).json({ squadId: squadId });
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				res.status(500).json({
					error: e.message,
					...e.meta,
				});
			}
		}
	},

	async read(req: Request, res: Response) {
		try {
			const squads: Squad[] = await squadService.read();
			res.json({ squads });
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				res.status(500).json({
					error: e.message,
					...e.meta,
				});
			}
		}
	},

	async delete(req: Request, res: Response) {
		try {
			const squadId: string = req.params.squadId;
			await squadService.delete(squadId);
			res.status(204).json();
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				res.status(500).json({
					error: e.message,
					...e.meta,
				});
			}
		}
	},

	async put(req: Request, res: Response) {
		try {
			const squad: UpdateSquadDTO = req.body;
			const squadId: string = await squadService.put(squad);
			res.status(200).json({ squadId: squadId });
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
