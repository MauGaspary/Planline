import loggerService from '../services/loggerService.js';

import { SessionCreationDTO } from '../dto/CreateSessionDTO.js';

import sessionService from '../services/sessionService.js';

import type { Request, Response } from 'express';

export default {
	async index(req: Request, res: Response) {
		const sessionCreationDto = req.body as SessionCreationDTO;

		try {
			const result = await sessionService.create(sessionCreationDto);

			loggerService.info('RESPONSE', JSON.stringify(result));

			res.json(result);
		} catch (e) {
			loggerService.error(e);

			res.status(500).json({ message: 'Erro ao criar sessão.' });
		}
	},

	async finalize(req: Request, res: Response) {
		const isToSave = req.query.save;

		const sessionIdDTO = req.params.sessionId;

		try {
			if (isToSave) {
				await sessionService.finalize(sessionIdDTO);
			} else {
				await sessionService.finalizeWithoutSaving(sessionIdDTO);
			}

			loggerService.info('RESPONSE no response body');

			res.status(204);
		} catch (e) {
			loggerService.error(e);

			res.status(500).json({ message: 'Erro ao finalizar sessão.' });
		}
	},

	async available(req: Request, res: Response) {
		const squadIdDTO = req.params.squad_id;

		try {
			const result = await sessionService.available(squadIdDTO);

			loggerService.info('RESPONSE', JSON.stringify(result));

			res.json(result);
		} catch (e) {
			loggerService.error(e);

			res.status(500).json({ message: 'Erro ao pegar sessões ativas.' });
		}
	},

	async download(req: Request, res: Response) {
		const sprintId = req.params.sprintId;

		try {
			const result = await sessionService.download(sprintId);

			loggerService.info('RESPONSE', JSON.stringify(result));

			res.json(result);
		} catch (e) {
			loggerService.error(e);

			res.status(500).json({ message: 'Erro ao gerar download da sprint.' });
		}
	},
};
