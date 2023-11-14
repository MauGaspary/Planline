import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import Modal from '../../../components/Modal';
import ProjectForm from '../../../components/ProjectForm';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';
import GenericTable from '../../../components/GenericTable';
import { useGet } from '../../../hooks/useGet';
import { ProjectDTO } from '../../../types/ProjectDTO';
import { useSearchParams } from 'react-router-dom';

function Project() {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState('');
	const { data: info, request: getInfo } = useGet<ProjectDTO[]>();
	const [searchParams] = useSearchParams();
	const projectId = searchParams.get('id');

	const columns = ['Nome', 'Organização', 'Squads'];

	useEffect(() => {
		getInfo(`/project`);
		if (projectId) {
			setId(projectId);
			setIsOpen(true);
		}
	}, []);

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
				<GenericTable
					listItems={info || []}
					onEdit={(e) => {
						setIsOpen(!isOpen);
						setId(e);
					}}
					columns={columns}
				/>
			</Container>
		</>
	);
}

export default Project;
