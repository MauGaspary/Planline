import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import organizationService from '../services/organizationService.js';

export default {
	async index(req: Request, res: Response) {
		try {
			const organization = await organizationService.index();
			res.json(organization);
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				res.status(500).json({
					error: e.message,
					...e.meta,
				});
			}
			res.status(500).json({
				error: e,
			});
		}
	},
};
