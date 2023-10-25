import { Request, Response } from 'express';
import projectService from '../services/projectService.js';
import { InfoDTO } from '../dto/InfoBody.js';
import { Prisma, Project } from '@prisma/client';
import { CreateProjectDTO } from 'src/dto/CreateProjectDTO.js';

export default {
	async infoByOrganizationId(req: Request, res: Response) {
		try {
			const organization_id: string = req.params.organization_id;
			const projects: InfoDTO[] = await projectService.infoByOrganizationId(organization_id);
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

	async create(req: Request, res: Response) {
		try {
			const project: CreateProjectDTO = req.body;
			const projectId: string = await projectService.create(project);
			res.json({ projectId: projectId });
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
			const projects: Project[] = await projectService.read();
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
