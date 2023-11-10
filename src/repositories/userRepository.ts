import { PrismaClient, User } from '@prisma/client';
import { CreateUserDTO } from '../dto/CreateUserDto';
import { UpdateUserDTO } from '../dto/UpdateUserDTO';

const prisma = new PrismaClient();

export default {
	async index(): Promise<Array<User>> {
		const users = await prisma.user.findMany();
		return users;
	},

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

	async put(data: UpdateUserDTO): Promise<string> {
		const user = await prisma.user.update({
			data: { ...data },
			where: {
				id: data.id,
			},
		});
		return user.id;
	},
};
