import { PrismaClient, User } from '@prisma/client';
import { CreateUserDTO } from 'src/dto/CreateUserDto';

const prisma = new PrismaClient();

export default {
	async index(): Promise<Array<User>> {
		const users = await prisma.user.findMany();
		return users;
	},

	/*

	async creates(data: User): Promise<User> {
		const user = await prisma.user.create({
			data: { ...data },
		});
		console.log(user);
		return user;
	},

	*/

	async create(data: CreateUserDTO): Promise<string> {
		const user = await prisma.user.create({
			data: { ...data },
		});
		return user.id;
	},
	async read(): Promise<User[]> {
		const users: User[] = await prisma.user.findMany();
		return users;
	},
	async delete(data: string): Promise<string> {
		const user = await prisma.user.delete({
			where: {
				id: data,
			},
		});
		return user.id;
	},
};
