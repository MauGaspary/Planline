import { InfoBody } from './InfoBody';

export type OrganizationDTO = {
	name: string;
	id: string;
	projects: InfoBody[];
};
