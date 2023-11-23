import { InfoBody } from './InfoBody';
import { OrganizationDTO } from './OrganizationDTO';

export type ProjectDTO = {
	name: string;
	id: string;
	organization_id: string;
	squads: InfoBody[];
	Organization: OrganizationDTO;
};
