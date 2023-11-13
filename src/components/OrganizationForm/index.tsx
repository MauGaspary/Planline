import { useEffect, useState } from 'react';
import { useGet } from '../../hooks/useGet';
import { InfoBody } from '../../types/InfoBody';
import Button from '../Button';
import { OrganizationDTO } from '../../types/OrganizationDTO';
import { Multiselect } from '../Multiselect';
import { usePost } from '../../hooks/usePost';
import { usePut } from '../../hooks/usePut';

interface FormProps {
	id?: string;
	isOpen: () => void;
}

export default function OrganizationForm({ id, isOpen }: FormProps) {
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [project, setProject] = useState<InfoBody[]>([]);
	const [selectedProjects, setSelectedProjects] = useState<InfoBody[]>([]);
	const [openSelect, setOpenSelect] = useState<string | null>(null);

	const { data: info, request: getInfo } = useGet<OrganizationDTO>();
	const { data: projects, request: getProjects } = useGet<InfoBody[]>();
	const { data: organization, request: createOrganization, error, isLoading } = usePost<T>();
	const { dataEdit: newOrganization, request: editOrganization, errorEdit, isLoadingEdit } = usePut<T>();

	useEffect(() => {
		getInfo(`/organization/${id}`);
		getProjects(`/project`);
	}, []);

	useEffect(() => {
		if (info) {
			setName(info.name);
			setEmail(info.email);
			setProject(projects ?? []);
			setSelectedProjects(info.projects ?? []);
		}
	}, [info, projects]);

	useEffect(() => {
		if (organization) {
			console.log(`Editou organization`);
			isOpen();
		} else if (error) {
			console.log(`Deu erro, `, error);
		}
	}, [organization]);

	const handleCreate = () => {
		if (id) {
			// chamada api para editar
			editOrganization('/organization', { name, email });
			return;
		} else {
			// chamada api para criar
			console.log(`Criar organization`);
			const editOrganization = {
				name,
				email,
				projects: {
					connect: selectedProjects,
					disconnect: info?.projects?.filter((p) => !selectedProjects.includes(p)) ?? [],
				},
			};
		}
		createOrganization('/organization', editOrganization);
	}
};

const handleMultiselect = (option: InfoBody) => {
	if (selectedProjects.includes(option)) {
		setSelectedProjects(selectedProjects.filter((s) => s.id !== option.id));
	} else {
		setSelectedProjects([...selectedProjects, option]);
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
		{id && (
			<div className="flex items-end gap-2">
				<label
					className="text-lg mb-4 text-triider-grayscale-gray1 w-32 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
					htmlFor="name"
				>
					PROJETOS
				</label>
				<Multiselect
					handleMultiselect={handleMultiselect}
					selected={selectedProjects}
					options={project || []}
					isOpen={openSelect === 'project'}
					onToggle={() => setOpenSelect(openSelect === 'project' ? null : 'project')}
				/>
			</div>
		)}
		<div className="flex mt-5 justify-center items-center">
			<Button onClickAction={handleCreate}>{name ? 'Editar' : 'Criar'}</Button>
		</div>
	</div>
);
}
