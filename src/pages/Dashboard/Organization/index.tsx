import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import Modal from '../../../components/Modal';
import GenericForm from '../../../components/OrganizationForm';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';
import GenericTable from '../../../components/GenericTable';
import { useGet } from '../../../hooks/useGet';
import { OrganizationDTO } from '../../../types/OrganizationDTO';

function Organization() {
	const [isOpen, setIsOpen] = useState(false);
	const [id, setId] = useState('');
	const columns = ['Nome', 'Email', 'Projetos'];
	const { data: info, request: getInfo } = useGet<OrganizationDTO[]>();

	useEffect(() => {
		getInfo(`/organization`);
	}, []);

	return (
		<>
			<Modal
				isOpen={isOpen}
				title={id ? 'EDITAR ORGANIZAÇÃO' : 'CRIAR ORGANIZAÇÃO'}
				onClose={() => {
					setIsOpen(!isOpen);
				}}
			>
				<GenericForm id={id} isOpen={() => setIsOpen(!isOpen)} />
			</Modal>
			<Container title="organizações">
				<InputHeader
					onAddButtonClick={() => {
						setIsOpen(!isOpen);
						setId('');
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
					columns={columns}
				/>
			</Container>
		</>
	);
}

export default Organization;
