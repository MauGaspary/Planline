import { Project, Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import projectService from '../services/projectService.js';

export default {
	async index(req: Request, res: Response) {
		try {
			const organization_id: string = req.params.organization_id;
			const projects: Array<Project> = await projectService.index(organization_id);
			res.json({ projects });
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
