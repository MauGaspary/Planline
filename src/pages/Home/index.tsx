import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import { Select } from '../../components/Select';
import { useGet } from '../../hooks/useGet';
import { InfoBody } from '../../types/InfoBody';
import { ResumeContext } from '../../contexts/ResumeInfoContext';
import Loader from '../../components/Loader';
import Breadcrumb from '../../components/Breadcrumb';
import Resume from '../Resume';

function Home() {
	const [breadcrumbDisplay, setBreadcrumbDisplay] = useState<string>('home');
	const [org, setOrg] = useState<InfoBody>({ name: 'Organização', id: '' });
	const [project, setProject] = useState<InfoBody>({ name: 'Projeto', id: '' });
	const [squad, setSquad] = useState<InfoBody>({ name: 'Squad', id: '' });
	const {
		setProjectContext,
		setSquadContext,
		setOrganizationContext,
		setSprintIdContext,
		setProjectIdContext,
		setOrganizationIdContext,
	} = useContext(ResumeContext);

	const [openSelect, setOpenSelect] = useState<string | null>(null);
	const {
		data: organizations,
		isLoading: isLoadingOrganizations,
		request: getOrganizations,
	} = useGet<InfoBody[]>();

	const { data: projects, request: getProjects } = useGet<InfoBody[]>();
	const { data: squads, request: getSquads } = useGet<InfoBody[]>();

	useEffect(() => {
		getOrganizations('/organization/info');
	}, []);

	const handleSelect = (placeholder: string, option: InfoBody) => {
		if (placeholder === org.name) {
			setProject({ name: 'Projeto', id: '' });
			setProjectContext('');
			setSquadContext('');
			setSprintIdContext('');
			setProjectIdContext('');
			setOrganizationContext(option.name);
			setOrganizationIdContext(option.id);
			setSquad({ name: 'Squad', id: '' });
			setOrg(option);
			if (option.id.length > 0) {
				getProjects(`/project/info/${option.id}`);
			}
		}
		if (placeholder === project.name) {
			setSquad({ name: 'Squad', id: '' });
			setSquadContext('');
			setProjectContext(option.name);
			setProjectIdContext(option.id);
			setProject(option);
			getSquads(`/squad/info/${option.id}`);
		}
		if (placeholder === squad.name) {
			setSquadContext(option.name);
			setSprintIdContext(option.id);
			setSquad(option);
		}
		setOpenSelect(null);
	};

	if (isLoadingOrganizations) {
		return <Loader />;
	}

	return (
		<div className="App">
			<Breadcrumb display={'home'} />
			{breadcrumbDisplay === 'home' && (
				<Container title="Identifique-se para visualizar mais informações" small>
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
							onClickAction={() => setBreadcrumbDisplay('import')}
							variant={squad.name === 'Squad' ? 'disabled' : 'primary'}
						>
							Confirmar
						</Button>
					</div>
				</Container>
			)}
			{breadcrumbDisplay === 'import' && <Resume />}
		</div>
	);
}

export default Home;
