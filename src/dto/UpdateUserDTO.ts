import { level } from '@prisma/client';

export type UpdateUserDTO = {
	id: string;
	name: string;
	email: string;
	level: level;
};
