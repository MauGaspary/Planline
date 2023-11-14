import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import Modal from '../../../components/Modal';
import SquadForm from '../../../components/SquadForm';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';
import GenericTable from '../../../components/GenericTable';
import { SquadDTO } from '../../../types/SquadDTO';
import { useGet } from '../../../hooks/useGet';

function Squad() {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState('');
	const { data: info, request: getInfo } = useGet<SquadDTO[]>();
	const columns = ['Nome', 'Membros', 'Organização'];

	useEffect(() => {
		getInfo(`/squad`);
	}, []);

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
				<GenericTable
					listItems={info || []}
					onEdit={(e) => {
						setIsOpen(!isOpen);
						setId(e);
					}}
					columns={columns}
				/>
			</Container>
		</>
	);
}

export default Squad;
