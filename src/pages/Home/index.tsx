import { useState } from 'react';
import Card from '../../components/Card';
import { Select } from '../../components/Select/Select';

const orgOptions = [
	'Organização 1',
	'Organização 2',
	'Organização 3',
	'Organização 4',
	'Organização 5',
];
const projOptions = ['Projeto 1', 'Projeto 2', 'Projeto 3', 'Projeto 4', 'Projeto 5'];
const squadOptions = ['Squad 1', 'Squad 2', 'Squad 3', 'Squad 4', 'Squad 5'];

function Home() {
	const [org, setOrg] = useState('Organização');
	const [project, setProject] = useState('Projeto');
	const [squad, setSquad] = useState('Squad');

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
	};

	return (
		<Card title="Identifique-se para visualizar mais informações" small>
			<div className="flex flex-col px-20 gap-5 self-center">
				<Select placeholder={org} options={orgOptions} handleSelect={handleSelect}></Select>
				<Select
					placeholder={project}
					options={projOptions}
					handleSelect={handleSelect}
					isDisabled={org === 'Organização'}
				></Select>
				<Select
					placeholder={squad}
					options={squadOptions}
					handleSelect={handleSelect}
					isDisabled={project === 'Projeto'}
				></Select>

				<button className="w-[359px] h-[55px] text-white bg-triider-primary-orange-dark p-2 rounded-[8px]">
					Confirmar
				</button>
			</div>
		</Card>
	);
}

export default Home;
