import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export default {
	async getByUserId(userId: string): Promise<User | null> {
		const user: User | null = await prisma.user.findFirst({
			where: {
				id: userId,
			},
		});
		return user;
	},
	async create(data: User): Promise<string> {
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

	async put(data: User): Promise<string> {
		const user = await prisma.user.update({
			data: { ...data },
			where: {
				id: data.id,
			},
		});
		return user.id;
	},
};
