import { SessionCreationDto } from '../dto/CreateSessionDto.js';
import sessionService from '../services/sessionService.js';
import type { Request, Response } from 'express';

export default {
	async index(req: Request, res: Response) {
		const sessionCreationDto = req.body as SessionCreationDto;
		res.json(await sessionService.create(sessionCreationDto));
	},

	async finalize(req: Request, res: Response) {
		const sessionIdDto = req.params.sessionId;
		res.json(await sessionService.finalize(sessionIdDto));
	},
};
