import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';
import { CreateUserDTO } from '../dto/CreateUserDto';
import userService from '../services/userService.js';

export default {
	async create(req: Request, res: Response) {
		try {
			const user: CreateUserDTO = req.body;
			const userId: string = await userService.create(user);
			res.json({ userId: userId });
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
