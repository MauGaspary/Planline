import { useState } from 'react';
import Card from '../../components/Card';
import { Select } from '../../components/Select/Select';

const orgOptions = ['organizacao 1', 'organizacao 2', 'organizacao 3'];
const projOptions = ['projeto 1', 'projeto 2', 'projeto 3'];
const squadOptions = ['squad 1', 'squad 2', 'squad 3'];

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
				<Select placeholder={project} options={projOptions} handleSelect={handleSelect}></Select>
				<Select placeholder={squad} options={squadOptions} handleSelect={handleSelect}></Select>

				<button className="w-[359px] h-[55px] text-white bg-triider-primary-orange-dark p-2 rounded-[8px]">
					Confirmar
				</button>
			</div>
		</Card>
	);
}

export default Home;
