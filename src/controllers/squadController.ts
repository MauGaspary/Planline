import { Request, Response } from 'express';
import squadService from '../services/squadService.js';
import { Prisma, Squad } from '@prisma/client';

export default {
	async create(req: Request, res: Response) {
		try {
			const squad: Squad = req.body;
			const squadId: string = await squadService.create(squad);
			res.status(201).json({ squadId: squadId });
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				res.status(500).json({
					error: e.message,
					...e.meta,
				});
			}
			console.log(e);
		}
	},
	async getBySquadId(req: Request, res: Response) {
		try {
			const squadId: string = req.params.squadId;
			const squad: Squad | null = await squadService.getBySquadId(squadId);
			res.json(squad);
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
			const squad: Squad = req.body;
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
