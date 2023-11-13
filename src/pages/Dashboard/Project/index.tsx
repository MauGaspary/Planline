import { useState } from 'react';
import Container from '../../../components/Container';
import Modal from '../../../components/Modal';
import ProjectForm from '../../../components/ProjectForm';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';
import GenericTable from '../../../components/GenericTable';

function Project() {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState('');
	const columns = ['Nome', 'Organização', 'Squads'];

	return (
		<>
			<Modal
				isOpen={isOpen}
				title={id ? 'EDITAR PROJETO' : 'CRIAR PROJETO'}
				onClose={() => {
					setIsOpen(!isOpen);
				}}
			>
				<ProjectForm id={id} isOpen={() => setIsOpen(!isOpen)} />
			</Modal>
			<Container title="projetos">
				<InputHeader onAddButtonClick={() => setIsOpen(!isOpen)}>
					<InputText placeholder="Nome" size="medium" isRequired={true} />
				</InputHeader>
				<GenericTable columns={columns} />
				<button
					onClick={() => {
						setIsOpen(!isOpen);
						setId('1');
					}}
				>
					Abrir edit
				</button>
			</Container>
		</>
	);
}

export default Project;
