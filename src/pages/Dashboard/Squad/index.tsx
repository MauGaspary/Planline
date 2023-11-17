import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import Modal from '../../../components/Modal';
import SquadForm from '../../../components/SquadForm';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';
import GenericTable from '../../../components/GenericTable';
import { SquadDTO } from '../../../types/SquadDTO';
import { useGet } from '../../../hooks/useGet';
import DeleteModal from '../../../components/DeleteModal';
import Spinner from '../../../components/Spinner';

function Squad() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);
	const [update, setUpdate] = useState(false);
	const [id, setId] = useState('');
	const [search, setSearch] = useState('');
	const { data: info, request: getInfo, isLoading } = useGet<SquadDTO[]>();
	const columns = ['Nome', 'Membros', 'Organização'];

	const filteredName =
		search.length > 0 ? info?.filter((item) => item.name.toLowerCase().includes(search)) : info;

	useEffect(() => {
		getInfo(`/squad`);
	}, [update]);

	return (
		<>
			<Modal
				isOpen={isOpen}
				title={id ? 'EDITAR SQUAD' : 'CRIAR SQUAD'}
				onClose={() => {
					setIsOpen(!isOpen);
				}}
			>
				<SquadForm id={id} isOpen={() => setIsOpen(!isOpen)} update={() => setUpdate(!update)} />
			</Modal>
			<DeleteModal
				isOpen={isOpenDelete}
				id={id}
				onClose={() => {
					setIsOpenDelete(!isOpenDelete);
				}}
				update={() => setUpdate(!update)}
				type="squad"
			/>
			<Container title="SQUADS">
				<InputHeader
					onAddButtonClick={() => {
						setId('');
						setIsOpen(!isOpen);
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

export default Squad;
