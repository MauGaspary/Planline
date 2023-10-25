import { Request, Response } from 'express';
import { Prisma, User } from '@prisma/client';
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
	async read(req: Request, res: Response) {
		try {
			const users: User[] = await userService.read();
			res.json({ users });
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
			const userId: string = req.params.userId;
			const respId: string = await userService.delete(userId);
			res.status(204).json();
			res.json({ respId: respId });
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
