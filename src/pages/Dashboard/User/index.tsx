import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';
import GenericTable from '../../../components/GenericTable';
import Modal from '../../../components/Modal';
import UserForm from '../../../components/UserForm';
import { UserDTO } from '../../../types/UserDTO';
import { useGet } from '../../../hooks/useGet';
import DeleteModal from '../../../components/DeleteModal';
import Spinner from '../../../components/Spinner';

function User() {
	const [isOpen, setIsOpen] = useState(false);
	const [update, setUpdate] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);
	const [id, setId] = useState('');
	const [search, setSearch] = useState('');
	const { data: info, request: getInfo, isLoading } = useGet<UserDTO[]>();

	const columns = ['Nome', 'Email', 'Nível'];

	const filteredName =
		search.length > 0 ? info?.filter((item) => item.name.toLowerCase().includes(search)) : info;

	useEffect(() => {
		getInfo(`/user`);
	}, [update]);

	return (
		<>
			<Modal
				isOpen={isOpen}
				title={id ? 'EDITAR USUÁRIO' : 'CRIAR USUÁRIO'}
				onClose={() => {
					setIsOpen(!isOpen);
				}}
			>
				<UserForm id={id} isOpen={() => setIsOpen(!isOpen)} update={() => setUpdate(!update)} />
			</Modal>
			<DeleteModal
				isOpen={isOpenDelete}
				id={id}
				onClose={() => {
					setIsOpenDelete(!isOpenDelete);
				}}
				update={() => setUpdate(!update)}
				type="user"
			/>
			<Container title="usuários">
				<InputHeader
					onAddButtonClick={() => {
						setId('');
						setIsOpen(!isOpen);
					}}
				>
					<InputText
						placeholder="Nome"
						value={search}
						size="medium"
						isRequired={true}
						onChange={(event) => setSearch(event.target.value)}
					/>
				</InputHeader>
				{isLoading ? (
					<div className="w-full flex items-center justify-center mt-8 h-60">
						<Spinner color="triider-primary-orange-dark" size="16" />
					</div>
				) : (
					<GenericTable
						listItems={filteredName || []}
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
				)}
			</Container>
		</>
	);
}

export default User;
