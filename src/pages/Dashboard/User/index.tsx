import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import { Select } from '../../../components/Select';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';
import GenericTable from '../../../components/GenericTable';
import Modal from '../../../components/Modal';
import UserForm from '../../../components/UserForm';
import { UserDTO } from '../../../types/UserDTO';
import { useGet } from '../../../hooks/useGet';
import DeleteModal from '../../../components/DeleteModal';

function User() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);
	const [id, setId] = useState('');
	const { data: info, request: getInfo } = useGet<UserDTO[]>();

	const columns = ['Nome', 'Email', 'Nível'];

	useEffect(() => {
		getInfo(`/user`);
	}, []);

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
			<DeleteModal
				isOpen={isOpenDelete}
				id={id}
				onClose={() => {
					setIsOpenDelete(!isOpenDelete);
				}}
				type="user"
			/>
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
				<GenericTable
					listItems={info || []}
					onEdit={(e) => {
						setIsOpen(!isOpen);
						setId(e);
					}}
					onDelete={(e) => {
						setIsOpenDelete(!isOpenDelete);
						setId(e);
					}}
					columns={columns}
				/>
			</Container>
		</>
	);
}

export default User;
