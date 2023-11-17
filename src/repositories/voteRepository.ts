import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
	async create(vote: Prisma.VoteCreateInput) {
		console.log(vote);

		return prisma.vote.create({
			data: vote,
		});
	},
};
