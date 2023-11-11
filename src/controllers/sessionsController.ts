import { SessionCreationDTO } from '../dto/CreateSessionDTO.js';
import sessionService from '../services/sessionService.js';
import type { Request, Response } from 'express';

export default {
	async index(req: Request, res: Response) {
		const sessionCreationDTO = req.body as SessionCreationDTO;

		res.json(await sessionService.create(sessionCreationDTO));
	},

	async finalize(req: Request, res: Response) {
		const isToSave = req.query.save;

		const sessionIdDTO = req.params.sessionId;

		if (isToSave) {
			await sessionService.finalize(sessionIdDTO);
		} else {
			await sessionService.finalizeWithoutSaving(sessionIdDTO);
		}

		res.status(204);
	},

	async available(req: Request, res: Response) {
		const squadIdDTO = req.params.squad_id;
		res.json(await sessionService.available(squadIdDTO));
	},
};
