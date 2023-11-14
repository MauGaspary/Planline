import { useEffect, useState } from 'react';
import { useGet } from '../../hooks/useGet';
import { InfoBody } from '../../types/InfoBody';
import Button from '../Button';
import { Select } from '../Select';
import { ProjectDTO } from '../../types/ProjectDTO';
import { Multiselect } from '../Multiselect';
import { usePost } from '../../hooks/usePost';
import Spinner from '../Spinner';
import { usePut } from '../../hooks/usePut';
import { SquadDTO } from '../../types/SquadDTO';

interface FormProps {
	id?: string;
	isOpen: () => void;
}

export default function ProjectForm({ id, isOpen }: FormProps) {
	const [name, setName] = useState('');
	const [openSelect, setOpenSelect] = useState<string | null>(null);
	const [org, setOrg] = useState<InfoBody>({ name: 'Escolha a organização', id: '' });
	const [squad, setSquad] = useState<InfoBody[]>([]);
	const [selectedSquad, setSelectedSquad] = useState<InfoBody[]>([]);
	const { data: info, request: getInfo } = useGet<ProjectDTO>();
	const { data: organizations, request: getOrganizations } = useGet<InfoBody[]>();
	const { data: squads, request: getSquads } = useGet<SquadDTO[]>();
	const { data: project, request: createProject, error, isLoading } = usePost<T>();
	const { dataEdit: newProject, request: editProject, errorEdit, isLoadingEdit } = usePut<T>();

	useEffect(() => {
		getOrganizations('/organization');
		if (id) {
			getInfo(`/project/${id}`);
			getSquads('/squad');
		}
	}, []);

	useEffect(() => {
		if (info) {
			setName(info.name || '');
			const org = organizations?.find((org) => org.id === info.organization_id);
			if (org) {
				setOrg({ name: org.name, id: org.id });
			}
			if (info.squads) {
				const squadSelected = info.squads.map((squad) => ({ name: squad.name, id: squad.id }));
				setSelectedSquad(squadSelected);
			}
			const squadOptions = squads
				?.filter((squad) => info.organization_id === squad.organization_id)
				.map((squad) => ({ name: squad.name, id: squad.id }));

			if (squadOptions) {
				setSquad(squadOptions);
			}
		}
	}, [info, organizations, squads]);

	useEffect(() => {
		if (project) {
			console.log(`Criou projeto`);
			isOpen();
		} else if (error) {
			console.log(`Deu erro, `, error);
		}
	}, [project, error]);

	useEffect(() => {
		if (newProject) {
			console.log(`Editou projeto`);
			isOpen();
		} else if (errorEdit) {
			console.log(`Deu erro edit, `, error);
		}
	}, [newProject, errorEdit]);

	const handleCreate = () => {
		if (id) {
			// chamada api para editar
			const connectedSquads = selectedSquad.map((p) => {
				return {
					id: p.id,
				};
			});

			const disconnectedSquads = squad
				?.filter(
					(option) => !selectedSquad.some((selectedOption) => selectedOption.id === option.id)
				)
				.map((p) => {
					return {
						id: p.id,
					};
				});

			const editedProject = {
				id,
				name,
				organization_id: org.id,
				squads: {
					connect: connectedSquads,
					disconnect: disconnectedSquads,
				},
			};

			editProject('/project', editedProject);
		} else {
			// chamada api para criar
			const newProject = {
				name,
				organization_id: org.id,
			};
			createProject('/project', newProject);
		}
	};

	const handleSelect = (_placeholder: string, option: InfoBody) => {
		setOrg(option);
		setOpenSelect(null);
	};

	const handleMultiselect = (option: InfoBody) => {
		if (selectedSquad.includes(option)) {
			setSelectedSquad(selectedSquad.filter((s) => s.id !== option.id));
		} else {
			setSelectedSquad([...selectedSquad, option]);
		}
	};

	return (
		<div className="flex flex-col gap-4 justify-center">
			<div className="flex items-end gap-2">
				<label
					className="text-lg mb-4 text-triider-grayscale-gray1 min-w-[128px] mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
					htmlFor="name"
				>
					NOME
				</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Digite o nome do projeto"
					className="block w-full p-4 min-w-[248px] text-sm border border-triider-grayscale-gray3 rounded-lg bg-triider-grayscale-gray4 focus:outline-none focus:ring-2 focus:ring-triider-primary-orange2"
				/>
			</div>

			<div className="flex items-end gap-2">
				<label
					className="text-lg mb-4 text-triider-grayscale-gray1 w-32 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
					htmlFor="name"
				>
					ORGANIZAÇÃO
				</label>
				<Select
					placeholder={org.name}
					options={organizations || []}
					handleSelect={handleSelect}
					isOpen={openSelect === 'org'}
					onToggle={() => setOpenSelect(openSelect === 'org' ? null : 'org')}
				/>
			</div>
			{id && (
				<div className="flex items-end gap-2">
					<label
						className="text-lg mb-4 text-triider-grayscale-gray1 w-32 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
						htmlFor="name"
					>
						SQUADS
					</label>
					<Multiselect
						handleMultiselect={handleMultiselect}
						selected={selectedSquad}
						options={squad}
						isOpen={openSelect === 'squad'}
						onToggle={() => setOpenSelect(openSelect === 'squad' ? null : 'squad')}
					/>
				</div>
			)}
			<div className="flex mt-5 justify-center items-center">
				<Button onClickAction={handleCreate}>
					{(isLoading || isLoadingEdit) && <Spinner />}
					{id ? 'Editar' : 'Criar'}
				</Button>
			</div>
		</div>
	);
}
