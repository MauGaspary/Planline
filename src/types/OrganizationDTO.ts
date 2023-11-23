import { InfoBody } from './InfoBody';

export type OrganizationDTO = {
	name: string;
	email: string;
	id: string;
	projects: InfoBody[];
};
