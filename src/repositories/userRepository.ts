import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export default {
	async index(): Promise<Array<User>> {
		const users = await prisma.user.findMany();
		return users;
	},

	async creates(data: User): Promise<User> {
		const user = await prisma.user.create({
			data: { ...data },
		});
		console.log(user);
		return user;
	},
};
