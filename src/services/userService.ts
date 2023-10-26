import { User, Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import userRepository from '../repositories/userRepository.js';
import { CreateUserDTO } from '../dto/CreateUserDto.js';
import { UpdateUserDTO } from '../dto/UpdateUserDTO.js';

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

	async create(user: CreateUserDTO): Promise<string> {
		this.validateEmail(user.email);
		const userId: string = await userRepository.create(user);
		return userId;
	},
	async read(): Promise<User[]> {
		const users: User[] = await userRepository.read();
		return users;
	},
	async delete(user: string): Promise<string> {
		const userId: string = await userRepository.delete(user);
		return userId;
	},

	async put(user: UpdateUserDTO): Promise<string> {
		this.validateEmail(user.email);
		const userId: string = await userRepository.put(user);
		return userId;
	},

	validateEmail(email: string): void {
		const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		if (!expression.test(email)) {
			throw new Error('email is invalid');
		}
	},
};
