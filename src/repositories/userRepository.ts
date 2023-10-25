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
	async delete(data: string): Promise<string> {
		const user = await prisma.user.delete({
			where: {
				id: data, // Supondo que a ID seja a chave primária 'id'.
			},
		});
		return user.id;
	},
};
