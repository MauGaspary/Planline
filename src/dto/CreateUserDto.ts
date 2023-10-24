import { level } from '@prisma/client';

export type CreateUserDTO = {
	name: string;
	email: string;
	level: level;
};

// enum Level {
// JUNIOR,
// PLENO,
// SENIOR,
// }
