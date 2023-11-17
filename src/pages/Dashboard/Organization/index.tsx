import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import Modal from '../../../components/Modal';
import GenericForm from '../../../components/OrganizationForm';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';
import GenericTable from '../../../components/GenericTable';
import { useGet } from '../../../hooks/useGet';
import { OrganizationDTO } from '../../../types/OrganizationDTO';
import DeleteModal from '../../../components/DeleteModal';
import Spinner from '../../../components/Spinner';

function Organization() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);
	const [update, setUpdate] = useState(false);
	const [id, setId] = useState('');
	const [search, setSearch] = useState('');
	const columns = ['Nome', 'Email', 'Projetos'];
	const { data: info, request: getInfo, isLoading } = useGet<OrganizationDTO[]>();

	const filteredName =
		search.length > 0 ? info?.filter((item) => item.name.toLowerCase().includes(search)) : info;

	useEffect(() => {
		getInfo(`/organization`);
	}, [update]);

	return (
		<>
			<Modal
				isOpen={isOpen}
				title={id ? 'EDITAR ORGANIZAÇÃO' : 'CRIAR ORGANIZAÇÃO'}
				onClose={() => {
					setIsOpen(!isOpen);
				}}
			>
				<GenericForm id={id} isOpen={() => setIsOpen(!isOpen)} update={() => setUpdate(!update)} />
			</Modal>
			<DeleteModal
				isOpen={isOpenDelete}
				id={id}
				onClose={() => {
					setIsOpenDelete(!isOpenDelete);
				}}
				update={() => setUpdate(!update)}
				type="organization"
			/>
			<Container title="organizações">
				<InputHeader
					onAddButtonClick={() => {
						setIsOpen(!isOpen);
						setId('');
					}}
				>
					<InputText
						value={search}
						placeholder="Nome"
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

export default Organization;
