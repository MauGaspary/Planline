import { User } from '@prisma/client';
import userRepository from '../repositories/userRepository.js';

export default {
	async getByUserId(userId: string): Promise<User | null> {
		const user: User | null = await userRepository.getByUserId(userId);
		return user;
	},
	async create(user: User): Promise<string> {
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

	async put(user: User): Promise<string> {
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
