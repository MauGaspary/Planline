import { PrismaClient, User } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export default {
	async index(body: Request, res: Response) {
		const users: Array<User> = await prisma.user.findMany();
		res.json({ ...users });
	},

	async create(data: Request, res: Response) {
		const user = await prisma.user.create({
			data: { ...data.body },
		});
		console.log(user);
		res.json(user);
	},
};
