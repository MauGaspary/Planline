import Express from 'express';
import { Organization, Prisma } from '@prisma/client';
import { Response, Request } from 'express';
import organizationService from '../services/organizationService.js';

const express = Express;

const routes = express.Router();

routes.get('/organization', async (_req: Request, res: Response) => {
	try {
		const organization: Array<Organization> = await organizationService.index();
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
});

export default routes;
