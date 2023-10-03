import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { Select } from '../../components/Select/Select';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { useGet } from '../../hooks/useGet';

type InfoDTO = {
	name: string;
	id: string;
};

function Home() {
	const [org, setOrg] = useState('Organização');
	const [project, setProject] = useState('Projeto');
	const [squad, setSquad] = useState('Squad');

	const [openSelect, setOpenSelect] = useState<string | null>(null);
	const {
		data: organizations,
		isLoading: isLoadingOrganizations,
		request: getOrganizations,
	} = useGet<InfoDTO[]>('/organization/info');

	const { data: projects, request: getProjects } = useGet<InfoDTO[]>('/project/info');
	const { data: squads, request: getSquads } = useGet<InfoDTO[]>('/squad/info');

	useEffect(() => {
		getOrganizations();
	}, []);

	const handleSelect = (placeholder: string, option: string) => {
		if (placeholder === org) {
			setOrg(option);
			getProjects();
		}
		if (placeholder === project) {
			setProject(option);
			getSquads();
		}
		if (placeholder === squad) {
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
					placeholder={org}
					options={organizations?.map((org) => org.name) || []}
					handleSelect={handleSelect}
					isOpen={openSelect === 'org'}
					onToggle={() => setOpenSelect(openSelect === 'org' ? null : 'org')}
				/>
				<Select
					placeholder={project}
					options={projects?.map((org) => org.name) || []}
					handleSelect={handleSelect}
					disabled={org === 'Organização'}
					isOpen={openSelect === 'project'}
					onToggle={() => setOpenSelect(openSelect === 'project' ? null : 'project')}
				/>
				<Select
					placeholder={squad}
					options={squads?.map((org) => org.name) || []}
					handleSelect={handleSelect}
					disabled={project === 'Projeto'}
					isOpen={openSelect === 'squad'}
					onToggle={() => setOpenSelect(openSelect === 'squad' ? null : 'squad')}
				/>

				<Link to="/upload">
					<Button size="medium" disabled={squad === 'Squad'}>
						Confirmar
					</Button>
				</Link>
			</div>
		</Card>
	);
}

export default Home;
