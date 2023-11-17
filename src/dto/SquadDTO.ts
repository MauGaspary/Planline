import { User } from '@prisma/client';

export type SquadDTO = {
	id: string;
	name: string;
	organization_id: string;
	users: User[];
	updated_at: Date;
	created_at: Date;
};
