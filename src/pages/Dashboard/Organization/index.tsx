import { useState } from 'react';
import Container from '../../../components/Container';
import Modal from '../../../components/Modal';
import GenericForm from '../../../components/OrganizationForm';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';

function Organization() {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState('');

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

export default Organization;
