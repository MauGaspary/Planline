import { Organization, Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import organizationService from '../services/organizationService.js';
import { CreateOrganizationDTO } from '../dto/CreateOrganizationDTO.js';
import { UpdateOrganizationDTO } from '../dto/UpdateOrganizationDTO.js';

export default {
	async info(req: Request, res: Response) {
		try {
			const organization = await organizationService.info();
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
	async create(req: Request, res: Response) {
		try {
			const organization: CreateOrganizationDTO = req.body;
			const organizationId: string = await organizationService.create(organization);
			res.status(201).json({ organizationId: organizationId });
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
			const organizations: Organization[] = await organizationService.read();
			res.json({ organizations });
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
			const organizationId: string = req.params.organizationId;
			await organizationService.delete(organizationId);
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
			const organization: UpdateOrganizationDTO = req.body;
			const organizationId: string = await organizationService.put(organization);
			res.status(200).json({ organizationId: organizationId });
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
