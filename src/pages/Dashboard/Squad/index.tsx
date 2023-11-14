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

function Squad() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);
	const [update, setUpdate] = useState(false);
	const [id, setId] = useState('');
	const { data: info, request: getInfo } = useGet<SquadDTO[]>();
	const columns = ['Nome', 'Membros', 'Organização'];

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
					<InputText placeholder="Nome" size="medium" isRequired={true} />
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

export default Squad;
