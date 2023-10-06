import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Select } from '../../components/Select/Select';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useGet } from '../../hooks/useGet';
import { InfoBody } from '../../types/InfoBody';

function Home() {
	const [org, setOrg] = useState<InfoBody>({ name: 'Organização', id: '' });
	const [project, setProject] = useState<InfoBody>({ name: 'Projeto', id: '' });
	const [squad, setSquad] = useState<InfoBody>({ name: 'Squad', id: '' });

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
			setSquad({ name: 'Squad', id: '' });
			setOrg(option);
			if (option.id.length > 0) {
				getProjects(`/project/info/${option.id}`);
			}
		}
		if (placeholder === project.name) {
			setSquad({ name: 'Squad', id: '' });
			setProject(option);
			getSquads(`/squad/info/${project.id}`);
		}
		if (placeholder === squad.name) {
			setSquad(option);
		}
		setOpenSelect(null);
	};

	return isLoadingOrganizations ? (
		<h1>Carregando...</h1>
	) : (
		<Card title="Identifique-se para visualizar mais informações" small>
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

				<Link to="/upload">
					<Button size="medium" disabled={squad.name === 'Squad'}>
						Confirmar
					</Button>
				</Link>
			</div>
		</Card>
	);
}

export default Home;
