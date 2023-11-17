import { User } from '@prisma/client';
import { Request, Response } from 'express';
import userService from '../services/userService.js';
import loggerService from '../services/loggerService.js';

export default {
	async create(req: Request, res: Response) {
		try {
			const user: User = req.body;
			const userId: string = await userService.create(user);
			loggerService.info('RESPONSE', userId);
			res.status(201).json({ userId: userId });
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao criar usuário.' });
		}
	},
	async getByUserId(req: Request, res: Response) {
		try {
			const userId: string = req.params.userId;
			const user: User | null = await userService.getByUserId(userId);
			loggerService.info('RESPONSE', JSON.stringify(user));
			res.json(user);
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao buscar usuário.' });
		}
	},
	async read(req: Request, res: Response) {
		try {
			const users: User[] = await userService.read();
			loggerService.info('RESPONSE', JSON.stringify(users));
			res.json(users);
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao buscar usuários.' });
		}
	},

	async delete(req: Request, res: Response) {
		try {
			const userId: string = req.params.userId;
			const respId: string = await userService.delete(userId);
			res.status(201).json({ respId });
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao deletar usuários.' });
		}
	},

	async put(req: Request, res: Response) {
		try {
			const user: User = req.body;
			const userId: string = await userService.put(user);
			loggerService.info('RESPONSE', userId);
			res.status(200).json({ userId: userId });
		} catch (e) {
			loggerService.error(e);
			res.status(500).json({ message: 'Erro ao atualizar usuário.' });
		}
	},
};
