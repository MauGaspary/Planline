import { Organization } from '@prisma/client';
import { Request, Response } from 'express';
import organizationService from '../services/organizationService.js';
import loggerService from '../services/loggerService.js';

export default {
	async create(req: Request, res: Response) {
		try {
			const organization: Organization = req.body;
			const organizationId: string = await organizationService.create(organization);
			loggerService.info('RESPONSE', organizationId);
			res.status(201).json({ organizationId: organizationId });
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao criar organização.' });
		}
	},
	async getByOrganizationId(req: Request, res: Response) {
		try {
			const organizationId: string = req.params.organizationId;
			const organization: Organization | null =
				await organizationService.getByOrganizationId(organizationId);
			loggerService.info('RESPONSE', JSON.stringify(organization));
			res.json(organization);
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao buscar organização.' });
		}
	},
	async read(req: Request, res: Response) {
		try {
			const organizations: Organization[] = await organizationService.read();
			loggerService.info('RESPONSE', JSON.stringify(organizations));
			res.json({ organizations });
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao buscar organizações.' });
		}
	},
	async delete(req: Request, res: Response) {
		try {
			const organizationId: string = req.params.organizationId;
			await organizationService.delete(organizationId);
			res.status(204).send();
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao deletar organização.' });
		}
	},
	async put(req: Request, res: Response) {
		try {
			const organization: Organization = req.body;
			const organizationId: string = await organizationService.put(organization);
			loggerService.info('RESPONSE', organizationId);
			res.status(200).json({ organizationId: organizationId });
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao atualizar organização.' });
		}
	},
};
