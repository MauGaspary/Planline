import { useState } from 'react';
import Container from '../../../components/Container';
import Modal from '../../../components/Modal';
import SquadForm from '../../../components/SquadForm';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';

function Squad() {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState('');

	return (
		<>
			<Modal
				isOpen={isOpen}
				title={id ? 'EDITAR SQUAD' : 'CRIAR SQUAD'}
				onClose={() => {
					setIsOpen(!isOpen);
				}}
			>
				<SquadForm id={id} isOpen={() => setIsOpen(!isOpen)} />
			</Modal>
			<Container title="SQUADS">
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

export default Squad;
