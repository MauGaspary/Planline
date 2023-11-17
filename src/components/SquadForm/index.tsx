import { useEffect, useState } from 'react';
import { useGet } from '../../hooks/useGet';
import { InfoBody } from '../../types/InfoBody';
import Button from '../Button';
import { Multiselect } from '../Multiselect';
import { Select } from '../Select';
import { SquadDTO } from '../../types/SquadDTO';
import Spinner from '../Spinner';
import { usePost } from '../../hooks/usePost';
import { usePut } from '../../hooks/usePut';
import { DefaultResponse } from '../../types/DefaultResponse';

interface FormProps {
	id?: string;
	isOpen: () => void;
	update: () => void;
	errorMessage: (message: string) => void;
}

interface SquadBody {
	id?: string;
	name: string;
	organization_id: string;
	users?: {
		connect: {
			id: string;
		}[];
		disconnect: {
			id: string;
		}[];
	};
}

export default function SquadForm({ id, isOpen, update, errorMessage }: FormProps) {
	const [name, setName] = useState('');
	const [openSelect, setOpenSelect] = useState<string | null>(null);
	const [selectedUsers, setSelectedUsers] = useState<InfoBody[]>([]);
	const [org, setOrg] = useState<InfoBody>({ name: 'Escolha a organização', id: '' });
	const { data: info, request: getInfo } = useGet<SquadDTO>();
	const { data: users, request: getUsers } = useGet<InfoBody[]>();
	const { data: organizations, request: getOrganizations } = useGet<InfoBody[]>();
	const {
		data: newSquad,
		request: createSquad,
		error,
		isLoading,
	} = usePost<DefaultResponse, SquadBody>();
	const {
		dataEdit: editedSquad,
		request: editSquad,
		errorEdit,
		isLoadingEdit,
	} = usePut<DefaultResponse, SquadBody>();

	useEffect(() => {
		getOrganizations('/organization');
		if (id) {
			getInfo(`/squad/${id}`);
			getUsers('/user');
		}
	}, []);

	useEffect(() => {
		if (info) {
			setName(info.name || '');
			const org = organizations?.find((org) => org.id === info.organization_id);
			if (org) {
				setOrg({ name: org.name, id: org.id });
			}
			if (info.users) {
				const usersSelected = info.users.map((squad) => ({ name: squad.name, id: squad.id }));
				setSelectedUsers(usersSelected);
			}
		}
	}, [info, organizations]);

	useEffect(() => {
		if (newSquad) {
			isOpen();
			update();
		} else if (error) {
			errorMessage(error.response.data.message || 'Erro ao criar a squad');
			isOpen();
		}
	}, [newSquad, error]);

	useEffect(() => {
		if (editedSquad) {
			isOpen();
			update();
		} else if (errorEdit) {
			errorMessage(errorEdit.response.data.message || 'Erro ao editar a squad');
			isOpen();
		}
	}, [editedSquad, errorEdit]);

	const handleCreate = () => {
		if (id) {
			// chamada api para editar
			const connectedUsers = selectedUsers.map((p) => {
				return {
					id: p.id,
				};
			});
			const disconnectedUsers =
				users
					?.filter(
						(option) => !selectedUsers.some((selectedOption) => selectedOption.id === option.id)
					)
					.map((p) => {
						return {
							id: p.id,
						};
					}) || [];
			const editedSquad = {
				id,
				name,
				organization_id: org.id,
				users: {
					connect: connectedUsers,
					disconnect: disconnectedUsers,
				},
			};
			editSquad('/squad', editedSquad);
		} else {
			// chamada api para criar
			const newSquad = {
				name,
				organization_id: org.id,
			};
			createSquad('/squad', newSquad);
		}
	};

	const handleMultiselect = (option: InfoBody) => {
		if (selectedUsers.includes(option)) {
			setSelectedUsers(selectedUsers.filter((s) => s.id !== option.id));
		} else {
			setSelectedUsers([...selectedUsers, option]);
		}
	};

	const handleSelect = (_placeholder: string, option: InfoBody) => {
		setOrg(option);
		setOpenSelect(null);
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
						USUÁRIOS
					</label>
					<Multiselect
						handleMultiselect={handleMultiselect}
						selected={selectedUsers}
						options={users || []}
						isOpen={openSelect === 'user'}
						onToggle={() => setOpenSelect(openSelect === 'user' ? null : 'user')}
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
