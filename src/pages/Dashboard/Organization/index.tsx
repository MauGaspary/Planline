import { useState } from 'react';
import Container from '../../../components/Container';
import GenericForm from '../../../components/GenericForm';
import Modal from '../../../components/Modal';

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
				<GenericForm id={id} type="org" isOpen={() => setIsOpen(!isOpen)} />
			</Modal>
			<Container title="organizações">
				<button
					onClick={() => {
						setIsOpen(!isOpen);
						setId('');
					}}
				>
					Abrir
				</button>
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
