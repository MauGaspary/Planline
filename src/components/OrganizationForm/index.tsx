import { useEffect, useState } from 'react';
import { useGet } from '../../hooks/useGet';
import { InfoBody } from '../../types/InfoBody';
import Button from '../Button';
import { OrganizationDTO } from '../../types/OrganizationDTO';
import { usePost } from '../../hooks/usePost';
import { usePut } from '../../hooks/usePut';
import ArrowDownIcon from '../../assets/icons/arrowDownIcon.svg';
import NewTabIcon from '../../assets/icons/newTabIcon.svg';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import { DefaultResponse } from '../../types/DefaultResponse';

interface FormProps {
	id?: string;
	isOpen: () => void;
	update: () => void;
	errorMessage: (message: string) => void;
}

interface OrganizationBody {
	id?: string;
	name: string;
	email: string;
	projects?: InfoBody[];
}

export default function OrganizationForm({ id, isOpen, update, errorMessage }: FormProps) {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [openSelect, setOpenSelect] = useState<boolean | null>(false);

	const { data: info, request: getInfo } = useGet<OrganizationDTO>();
	const { data: projects, request: getProjects } = useGet<InfoBody[]>();
	const {
		data: organization,
		request: createOrganization,
		error,
		isLoading,
	} = usePost<DefaultResponse, OrganizationBody>();
	const {
		dataEdit: newOrganization,
		request: editOrganization,
		errorEdit,
		isLoadingEdit,
	} = usePut<DefaultResponse, OrganizationBody>();

	useEffect(() => {
		if (id) {
			getProjects(`/project`);
			getInfo(`/organization/${id}`);
		}
	}, []);

	useEffect(() => {
		if (info) {
			setName(info.name || '');
			setEmail(info.email || '');
		}
	}, [info, projects]);

	useEffect(() => {
		if (organization) {
			console.log(`Criou organization`);
			isOpen();
			update();
		} else if (error) {
			console.log(`Deu erro, `, error);
			errorMessage(error.response.data.message || 'Erro ao criar organização');
			isOpen();
		}
	}, [organization, error]);

	useEffect(() => {
		if (newOrganization) {
			console.log(`Editou organization`);
			isOpen();
			update();
		} else if (errorEdit) {
			console.log(`Deu erro edit, `, errorEdit);
			errorMessage(errorEdit.response.data.message || 'Erro ao editar organização');
			isOpen();
		}
	}, [newOrganization, errorEdit]);

	const handleCreate = () => {
		if (id) {
			// chamada api para editar
			const editedOrganization = {
				id,
				name,
				email,
			};

			editOrganization('/organization', editedOrganization);
		} else {
			// chamada api para criar
			const newOrganization = {
				name,
				email,
			};
			createOrganization('/organization', newOrganization);
		}
	};

	return (
		<div className="flex flex-col gap-4 justify-center">
			<div className="flex items-end gap-2">
				<label
					className="text-lg mb-4 text-triider-grayscale-gray1 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
					htmlFor="name"
				>
					NOME
				</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Digite o nome da organização"
					className="block w-full p-4 min-w-[248px] text-sm border border-triider-grayscale-gray3 rounded-lg bg-triider-grayscale-gray4 focus:outline-none focus:ring-2 focus:ring-triider-primary-orange2"
				/>
			</div>
			<div className="flex items-end gap-2">
				<label
					className="text-lg mb-4 text-triider-grayscale-gray1 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
					htmlFor="email"
				>
					EMAIL
				</label>
				<input
					type="text"
					id="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Digite o email da organização"
					className="block w-full p-4 min-w-[248px] text-sm border border-triider-grayscale-gray3 rounded-lg bg-triider-grayscale-gray4 focus:outline-none focus:ring-2 focus:ring-triider-primary-orange2"
				/>
			</div>
			{id && info?.projects && (
				<div className="flex items-end gap-2">
					<label
						className="text-lg mb-4 text-triider-grayscale-gray1 w-32 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
						htmlFor="name"
					>
						PROJETOS
					</label>
					<div className="relative w-full max-w-[320px]">
						<div
							onClick={() => {
								if (info?.projects.length > 0) {
									setOpenSelect(!openSelect);
								}
							}}
							className="flex whitespace-pre overflow-hidden cursor-pointer min-h-[56px] h-auto items-center text-lg w-full bg-gray-100 pl-5 rounded-lg text-gray-700 font-medium hover:bg-slate-200"
						>
							{info?.projects.length > 0 ? (
								info?.projects.map((option, idx) => (
									<div key={option.id}>
										<p>
											{idx > 0 && ', '}
											{option.name}
										</p>
										<img src={ArrowDownIcon} alt="arrow" className="absolute right-3 top-4" />
									</div>
								))
							) : (
								<p>Nenhum projeto cadastrado</p>
							)}
						</div>
						{openSelect && (
							<ul className="absolute max-h-40 overflow-auto text-start z-10 items-center text-lg w-full bg-gray-200 rounded-lg text-gray-700 font-medium">
								{info?.projects.map((project) => (
									<Link
										key={project.id}
										to={`/dashboard/projects?id=${project.id}`}
										target="_blank"
										className="relative w-full max-w-[320px]"
									>
										<li className="p-4 cursor-pointer hover:bg-slate-300">{project.name}</li>
										<img src={NewTabIcon} alt="arrow" className="absolute right-3 top-4" />
									</Link>
								))}
							</ul>
						)}
					</div>
				</div>
			)}
			<div className="flex mt-5 justify-center items-center">
				<Button
					variant={name && name?.length > 0 ? 'primary' : 'disabled'}
					onClickAction={handleCreate}
				>
					{(isLoading || isLoadingEdit) && <Spinner />}
					{id ? 'Editar' : 'Criar'}
				</Button>
			</div>
		</div>
	);
}
