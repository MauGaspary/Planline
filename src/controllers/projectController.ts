import { Request, Response } from 'express';
import projectService from '../services/projectService.js';
import { Project } from '@prisma/client';
import loggerService from '../services/loggerService.js';

export default {
	async create(req: Request, res: Response) {
		try {
			const project: Project = req.body;
			const projectId: string = await projectService.create(project);
			loggerService.info('RESPONSE', projectId);
			res.status(201).json({ projectId: projectId });
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao criar projeto.' });
		}
	},

	async getByProjectId(req: Request, res: Response) {
		try {
			const projectId: string = req.params.projectId;
			const project: Project | null = await projectService.getByProjectId(projectId);
			loggerService.info('RESPONSE', JSON.stringify(project));
			res.json(project);
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao buscar projeto.' });
		}
	},

	async read(req: Request, res: Response) {
		try {
			const projects: Project[] = await projectService.read();
			loggerService.info('RESPONSE', JSON.stringify(projects));
			res.json(projects);
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao buscar projetos.' });
		}
	},
	async delete(req: Request, res: Response) {
		try {
			const projectId: string = req.params.projectId;
			await projectService.delete(projectId);
			res.status(204).json();
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao deletar projeto.' });
		}
	},
	async put(req: Request, res: Response) {
		try {
			const project: Project = req.body;
			const projectId: string = await projectService.put(project);
			loggerService.info('RESPONSE', JSON.stringify(projectId));
			res.status(200).json({ projectId: projectId });
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao atualizar projeto.' });
		}
	},
};
