import { InfoBody } from './InfoBody';

export type SquadDTO = {
	name: string;
	id: string;
	organization_id: string;
	users: InfoBody[];
};
