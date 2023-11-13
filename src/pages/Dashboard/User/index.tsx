import { useState } from 'react';
import Container from '../../../components/Container';
import { Select } from '../../../components/Select';
import { useState } from 'react';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';
import GenericTable from '../../../components/GenericTable';
import Modal from '../../../components/Modal';
import UserForm from '../../../components/UserForm';

function User() {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState('');

	const columns = ['Nome', 'Email', 'Nível', 'Squads'];

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
			<Container title="usuários">
				<InputHeader onAddButtonClick={() => setIsOpen(!isOpen)}>
					<InputText placeholder="Nome" size="medium" isRequired={true} />

					<Select
						placeholder="Nível"
						options={[
							{ id: '1', name: 'Junior' },
							{ id: '2', name: 'Pleno' },
							{ id: '3', name: 'Senior' },
						]}
						handleSelect={() => {}}
						disabled={false}
						isOpen={isOpen}
						onToggle={() => {
							setIsOpen(!isOpen);
						}}
						width="32"
					/>
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

export default User;
