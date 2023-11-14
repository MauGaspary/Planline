import { InfoBody } from './InfoBody';

export type ProjectDTO = {
	name: string;
	id: string;
	organization_id: string;
	squads: InfoBody[];
};
