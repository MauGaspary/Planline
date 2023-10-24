import { useState } from 'react';
import Container from '../../../components/Container';
import Modal from '../../../components/Modal';
import UserForm from '../../../components/UserForm';

function User() {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState('');

	return (
		<>
			<Modal
				isOpen={isOpen}
				title={id ? 'EDITAR USUÁRIO' : 'CRIAR USUÁRIO'}
				onClose={() => {
					setIsOpen(!isOpen);
				}}
			>
				<UserForm id={id} isOpen={() => setIsOpen(!isOpen)} />
			</Modal>
			<Container title="Usuários">
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

export default User;
