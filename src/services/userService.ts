import { User, Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import userRepository from '../repositories/userRepository.js';
import { CreateUserDTO } from 'src/dto/CreateUserDto.js';

export default {
	async index(body: Request, res: Response) {
		try {
			const users: Array<User> = await userRepository.index();
			if (users.length == 0) {
				res.status(404).json({
					message: 'There are no entities registered',
				});
			}
			res.json({ ...users });
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				res.status(500).json({
					error: e.message,
					...e.meta,
				});
			}
		}
	},

	/*

	async create(data: Request, res: Response) {
		try {
			const user = await userRepository.creates({ ...data.body });
			res.json(user);
		} catch (e) {
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				if (e.code === 'P2002') {
					res.status(500).json({
						error: 'There is a unique constraint violation',
						...e.meta,
					});
				}
			}
		}
	},

	*/

	async create(user: CreateUserDTO): Promise<string> {
		const userId: string = await userRepository.create(user);
		return userId;
	},
	async delete(user: string): Promise<string> {
		const userId: string = await userRepository.delete(user);
		return userId;
	},
};
