import { useState } from 'react';
import Container from '../../../components/Container';
import Modal from '../../../components/Modal';
import GenericForm from '../../../components/OrganizationForm';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';
import GenericTable from '../../../components/GenericTable';

function Organization() {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState('');
	const columns = ['Nome', 'Email', 'Projetos'];

	return (
		<>
			<Modal
				isOpen={isOpen}
				title={id ? 'EDITAR ORGANIZAÇÃO' : 'CRIAR ORGANIZAÇÃO'}
				onClose={() => {
					setIsOpen(!isOpen);
				}}
			>
				<GenericForm id={id} isOpen={() => setIsOpen(!isOpen)} />
			</Modal>
			<Container title="organizações">
				<InputHeader onAddButtonClick={() => setIsOpen(!isOpen)}>
					<InputText placeholder="Nome" size="medium" isRequired={true} />
				</InputHeader>
				<GenericTable columns={columns} />
				<button
					onClick={() => {
						setIsOpen(!isOpen);
						setId('a8d5f125-112b-490b-802f-7715a3cad338');
					}}
				>
					Abrir edit
				</button>
			</Container>
		</>
	);
}

export default Organization;
