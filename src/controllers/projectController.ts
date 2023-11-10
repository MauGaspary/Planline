import { Request, Response } from 'express';
import projectService from '../services/projectService.js';
import { Prisma, Project } from '@prisma/client';

export default {
	async create(req: Request, res: Response) {
		try {
			const project: Project = req.body;
			const projectId: string = await projectService.create(project);
			res.status(201).json({ projectId: projectId });
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				res.status(500).json({
					error: e.message,
					...e.meta,
				});
			}
		}
	},

	async getByProjectId(req: Request, res: Response) {
		try {
			const projectId: string = req.params.projectId;
			const project: Project | null = await projectService.getByProjectId(projectId);
			res.json(project);
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
	async delete(req: Request, res: Response) {
		try {
			const projectId: string = req.params.projectId;
			await projectService.delete(projectId);
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
			const project: Project = req.body;
			const projectId: string = await projectService.put(project);
			res.status(200).json({ projectId: projectId });
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
