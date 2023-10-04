import { Request, Response } from 'express';
import projectService from '../services/projectService.js';
import { InfoDTO } from '../dto/InfoBody.js';
import { Prisma } from '@prisma/client';

export default {
	async index(req: Request, res: Response) {
		try {
			const organization_id: string = req.params.organization_id;
			const projects: InfoDTO[] = await projectService.index(organization_id);
			res.json(projects);
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
