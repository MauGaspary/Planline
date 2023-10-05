import React, { useState } from 'react';
import Container from '../../components/Container';
import { Select } from '../../components/Select/Select';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const orgOptions = ['Organização 1', 'Organização 2', 'Organização 3'];
const projOptions = ['Projeto 1', 'Projeto 2', 'Projeto 3', 'Projeto 4', 'Projeto 5'];
const squadOptions = ['Squad 1', 'Squad 2', 'Squad 3', 'Squad 4', 'Squad 5'];

function Home() {
	const [org, setOrg] = useState('Organização');
	const [project, setProject] = useState('Projeto');
	const [squad, setSquad] = useState('Squad');

	const [openSelect, setOpenSelect] = useState<string | null>(null);

	const handleSelect = (placeholder: string, option: string) => {
		if (placeholder === org) {
			setOrg(option);
		}
		if (placeholder === project) {
			setProject(option);
		}
		if (placeholder === squad) {
			setSquad(option);
		}
		setOpenSelect(null);
	};

	return (
		<Container title="Identifique-se para visualizar mais informações" small>
			<div className="flex flex-col px-20 gap-5 self-center">
				<Select
					placeholder={org}
					options={orgOptions}
					handleSelect={handleSelect}
					isOpen={openSelect === 'org'}
					onToggle={() => setOpenSelect(openSelect === 'org' ? null : 'org')}
				/>
				<Select
					placeholder={project}
					options={projOptions}
					handleSelect={handleSelect}
					disabled={org === 'Organização'}
					isOpen={openSelect === 'project'}
					onToggle={() => setOpenSelect(openSelect === 'project' ? null : 'project')}
				/>
				<Select
					placeholder={squad}
					options={squadOptions}
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
		</Container>
	);
}

export default Home;
