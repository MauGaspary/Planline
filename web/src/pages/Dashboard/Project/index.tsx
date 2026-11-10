import { useEffect, useState } from 'react';
import Container from '../../../components/Container';
import Modal from '../../../components/Modal';
import ProjectForm from '../../../components/ProjectForm';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';
import GenericTable from '../../../components/GenericTable';
import { useGet } from '../../../hooks/useGet';
import { ProjectDTO } from '../../../types/ProjectDTO';
import { useSearchParams } from 'react-router-dom';
import DeleteModal from '../../../components/DeleteModal';
import Spinner from '../../../components/Spinner';
import Toast from '../../../components/Toast';

function Project() {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpenDelete, setIsOpenDelete] = useState(false);
	const [update, setUpdate] = useState(false);
	const [id, setId] = useState('');
	const [search, setSearch] = useState('');
	const { data: info, request: getInfo, isLoading } = useGet<ProjectDTO[]>();
	const [searchParams] = useSearchParams();
	const projectId = searchParams.get('id');
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [isError, setIsError] = useState<boolean>(false);

	const columns = ['Nome', 'Squads', 'Organização'];

	const filteredName =
		search.length > 0 ? info?.filter((item) => item.name.toLowerCase().includes(search)) : info;

	useEffect(() => {
		getInfo(`/project`);
		if (projectId) {
			setId(projectId);
			setIsOpen(true);
		}
	}, [update]);

	return (
		<>
			<Modal
				isOpen={isOpen}
				title={id ? 'EDITAR PROJETO' : 'CRIAR PROJETO'}
				onClose={() => {
					setIsOpen(!isOpen);
				}}
			>
				<ProjectForm
					id={id}
					isOpen={() => setIsOpen(!isOpen)}
					update={() => setUpdate(!update)}
					errorMessage={(message) => {
						setErrorMessage(message);
						setIsError(true);
					}}
				/>
			</Modal>
			<Toast message={errorMessage} isError={isError} />
			<DeleteModal
				isOpen={isOpenDelete}
				id={id}
				onClose={() => {
					setIsOpenDelete(!isOpenDelete);
				}}
				update={() => setUpdate(!update)}
				type="project"
			/>
			<Container title="projetos">
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

export default Project;
