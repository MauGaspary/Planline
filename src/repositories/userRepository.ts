import { PrismaClient, User } from '@prisma/client';
import { Response } from 'express';

const prisma = new PrismaClient();

export default {
	async index(res: Response) {
		const users = await prisma.user.findMany();
		res.json(users);
	},

	async creates(data: User, res: Response) {
		const user = await prisma.user.create({
			data: { ...data },
		});
		console.log(user);
		res.json(user);
	},
};
