import { PrismaClient, User } from '@prisma/client';
import { CreateUserDTO } from 'src/dto/CreateUserDto';

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
};
