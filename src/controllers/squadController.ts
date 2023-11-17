import loggerService from '../services/loggerService.js';
import { Squad } from '@prisma/client';
import { Request, Response } from 'express';
import squadService from '../services/squadService.js';
import { SquadDTO } from '../dto/SquadDTO.js';

export default {
	async create(req: Request, res: Response) {
		try {
			const squad: Squad = req.body;
			const squadId: string = await squadService.create(squad);
			loggerService.info('RESPONSE', squadId);
			res.status(201).json({ squadId: squadId });
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao criar projeto.' });
		}
	},
	async getBySquadId(req: Request, res: Response) {
		try {
			const squadId: string = req.params.squadId;
			const squad: SquadDTO | null = await squadService.getBySquadId(squadId);
			loggerService.info('RESPONSE', JSON.stringify(squad));
			res.json(squad);
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao buscar projeto.' });
		}
	},

	async read(req: Request, res: Response) {
		try {
			const squads: Squad[] = await squadService.read();
			loggerService.info('RESPONSE', JSON.stringify(squads));
			res.json(squads);
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao buscar projetos.' });
		}
	},

	async delete(req: Request, res: Response) {
		try {
			const squadId: string = req.params.squadId;
			const respId: string = await squadService.delete(squadId);
			res.status(201).json({ respId });
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao deletar projeto.' });
		}
	},

	async put(req: Request, res: Response) {
		try {
			const squad: Squad = req.body;
			const squadId: string = await squadService.put(squad);
			loggerService.info('RESPONSE', squadId);
			res.status(200).json({ squadId: squadId });
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao atualizar projetos.' });
		}
	},
};
