import { SessionCreationDto } from '../dto/CreateSessionDTO.js';
import sessionService from '../services/sessionService.js';
import type { Request, Response } from 'express';

export default {
	async index(req: Request, res: Response) {
		const sessionCreationDto = req.body as SessionCreationDto;

		res.json(await sessionService.create(sessionCreationDto));
	},

	async finalize(req: Request, res: Response) {
		const isToSave = req.query.save;

		const sessionIdDto = req.params.sessionId;

		if (isToSave) {
			await sessionService.finalize(sessionIdDto);
		} else {
			await sessionService.finalizeWithoutSaving(sessionIdDto);
		}

		res.status(204);
	},

	async available(req: Request, res: Response) {
		const squadIdDto = req.params.squad_id;
		res.json(await sessionService.available(squadIdDto));
	},
};
