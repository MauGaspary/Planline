import { useContext, useEffect, useState } from 'react';
import Breadcrumb from '..';
import { ResumeContext } from '../../../contexts/ResumeInfoContext';
import { useGet } from '../../../hooks/useGet';
import { InfoBody } from '../../../types/InfoBody';
import { OrganizationDTO } from '../../../types/OrganizationDTO';
import { ProjectDTO } from '../../../types/ProjectDTO';
import Button from '../../Button';
import Container from '../../Container';
import Loader from '../../Loader';
import { Select } from '../../Select';

interface IdentifyProps {
	setBreadcrumbDisplay?: (display: string) => void;
	historyPage?: boolean;
	changeHistoryPage?: () => void;
}

function Identify({ setBreadcrumbDisplay, historyPage, changeHistoryPage }: IdentifyProps) {
	const [org, setOrg] = useState<InfoBody>({ name: 'Organização', id: '' });
	const [project, setProject] = useState<InfoBody>({ name: 'Projeto', id: '' });
	const [squad, setSquad] = useState<InfoBody>({ name: 'Squad', id: '' });
	const [squads, setSquads] = useState<InfoBody[]>([]);
	const [projects, setProjects] = useState<InfoBody[]>([]);
	const {
		setProjectContext,
		setSquadContext,
		setOrganizationContext,
		setProjectIdContext,
		setOrganizationIdContext,
		setSquadIdContext,
		project_id,
	} = useContext(ResumeContext);

	const [openSelect, setOpenSelect] = useState<string | null>(null);
	const {
		data: organizations,
		isLoading: isLoadingOrganizations,
		request: getOrganizations,
	} = useGet<OrganizationDTO[]>();

	const { data: projectDTO, request: getProjects } = useGet<ProjectDTO>();

	useEffect(() => {
		getOrganizations('/organization');
	}, []);

	useEffect(() => {
		getProjects(`/project/${project_id}`);
	}, [project_id]);

	useEffect(() => {
		if (project_id && project_id.length > 0) {
			setSquads(projectDTO?.squads ?? []);
		}
	}, [projectDTO]);

	const handleSelect = (placeholder: string, option: InfoBody) => {
		if (placeholder === org.name) {
			setProject({ name: 'Projeto', id: '' });
			setProjectContext('');
			setSquadContext('');
			setSquadIdContext('');
			setProjectIdContext('');
			setOrganizationIdContext('');
			setOrganizationContext(option.name);
			setOrganizationIdContext(option.id);
			setSquad({ name: 'Squad', id: '' });
			setOrg(option);
			if (option.id.length > 0) {
				setProjects(organizations?.find((org) => org.id === option.id)?.projects ?? []);
			}
		}
		if (placeholder === project.name) {
			setSquad({ name: 'Squad', id: '' });
			setSquadContext('');
			setSquadIdContext('');
			setProjectContext(option.name);
			setProjectIdContext(option.id);
			setProject(option);
		}
		if (placeholder === squad.name) {
			setSquadContext(option.name);
			setSquadIdContext(option.id);
			setSquad(option);
		}
		setOpenSelect(null);
	};

	return isLoadingOrganizations ? (
		<Loader />
	) : (
		<>
			<Container
				title={
					historyPage
						? 'Identifique-se para exportar o histórico'
						: 'Identifique-se para visualizar mais informações'
				}
				small
			>
				{!historyPage && <Breadcrumb display={'home'} />}
				<div className="flex flex-col px-20 gap-5 self-center">
					<Select
						placeholder={org.name}
						options={organizations || []}
						handleSelect={handleSelect}
						isOpen={openSelect === 'org'}
						onToggle={() => setOpenSelect(openSelect === 'org' ? null : 'org')}
					/>
					<Select
						placeholder={project.name}
						options={projects || []}
						handleSelect={handleSelect}
						disabled={org.id === ''}
						isOpen={openSelect === 'project'}
						onToggle={() => setOpenSelect(openSelect === 'project' ? null : 'project')}
					/>
					<Select
						placeholder={squad.name}
						options={squads || []}
						handleSelect={handleSelect}
						disabled={project.id === ''}
						isOpen={openSelect === 'squad'}
						onToggle={() => setOpenSelect(openSelect === 'squad' ? null : 'squad')}
					/>

					<Button
						size="large"
						onClickAction={() => {
							if (historyPage) {
								changeHistoryPage && changeHistoryPage();
							} else {
								setBreadcrumbDisplay && setBreadcrumbDisplay('import');
							}
						}}
						variant={squad.name === 'Squad' ? 'disabled' : 'primary'}
					>
						Confirmar
					</Button>
				</div>
			</Container>
		</>
	);
}

export default Identify;
