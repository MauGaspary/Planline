import { useEffect, useState } from 'react';
import { useGet } from '../../hooks/useGet';
import { InfoBody } from '../../types/InfoBody';
import Button from '../Button';
import { Select } from '../Select';
import Spinner from '../Spinner';
import { UserDTO } from '../../types/UserDTO';
import { usePost } from '../../hooks/usePost';
import { usePut } from '../../hooks/usePut';
import { DefaultResponse } from '../../types/DefaultResponse';

interface UserFormProps {
	id?: string;
	isOpen: () => void;
	update: () => void;
}

const level = [
	{
		name: 'JUNIOR',
		id: '1',
	},
	{
		name: 'PLENO',
		id: '2',
	},
	{
		name: 'SENIOR',
		id: '3',
	},
];

interface UserBody {
	id?: string;
	name: string;
	email: string;
}

export default function UserForm({ id, isOpen, update }: UserFormProps) {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [openSelect, setOpenSelect] = useState<string | null>(null);
	const [levelSelected, setLevel] = useState<InfoBody>({ name: 'Escolha o nível', id: '' });
	const { data: userInfo, request: getUser } = useGet<UserDTO>();
	const {
		data: newUser,
		request: createUser,
		error,
		isLoading,
	} = usePost<DefaultResponse, UserBody>();
	const {
		dataEdit: editedUser,
		request: editUser,
		errorEdit,
		isLoadingEdit,
	} = usePut<DefaultResponse, UserBody>();

	const handleSelect = (_placeholder: string, option: InfoBody) => {
		setLevel(option);
		setOpenSelect(null);
	};

	useEffect(() => {
		if (id) {
			getUser(`/user/${id}`);
		}
	}, []);

	useEffect(() => {
		if (id) {
			setUserName(userInfo?.name || '');
			setUserEmail(userInfo?.email || '');
			setLevel({ name: userInfo?.level || '', id: levelSelected.id });
		}
	}, [userInfo]);

	useEffect(() => {
		if (newUser) {
			console.log(`Criou usuario`);
			isOpen();
			update();
		} else if (error) {
			console.log(`Deu erro, `, error);
		}
	}, [newUser, error]);

	useEffect(() => {
		if (editedUser) {
			console.log(`Editou usuario`);
			isOpen();
			update();
		} else if (errorEdit) {
			console.log(`Deu erro edit, `, error);
		}
	}, [editedUser, errorEdit]);

	const handleCreate = () => {
		if (id) {
			// chamada api para editar
			const editedUser = {
				id,
				name: userName,
				email: userEmail,
				level: levelSelected.name,
			};

			editUser('/user', editedUser);
		} else {
			// chamada api para criar
			const newUser = {
				name: userName,
				email: userEmail,
				level: levelSelected.name,
			};
			createUser('/user', newUser);
		}
	};

	return (
		<div className="flex flex-col gap-4 justify-center">
			<div className="flex items-end gap-2">
				<label
					className="text-lg mb-4 min-w-[128px] text-triider-grayscale-gray1 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
					htmlFor="name"
				>
					NOME
				</label>
				<input
					type="text"
					id="name"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					placeholder="Digite o nome do usuário"
					className="block p-4 w-full text-sm border border-triider-grayscale-gray3 rounded-lg bg-triider-grayscale-gray4 focus:outline-none focus:ring-2 focus:ring-triider-primary-orange2"
				/>
			</div>
			<div className="flex items-end gap-2">
				<label
					className="text-lg min-w-[128px] mb-4 text-triider-grayscale-gray1 w-20 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
					htmlFor="email"
				>
					EMAIL
				</label>
				<input
					type="text"
					id="email"
					value={userEmail}
					onChange={(e) => setUserEmail(e.target.value)}
					placeholder="Digite o email do usuário"
					className="block p-4 w-full text-sm border border-triider-grayscale-gray3 rounded-lg bg-triider-grayscale-gray4 focus:outline-none focus:ring-2 focus:ring-triider-primary-orange2"
				/>
			</div>
			<div className="flex items-end gap-2">
				<label
					className="text-lg mb-4 text-triider-grayscale-gray1 w-32 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
					htmlFor="level"
				>
					LEVEL
				</label>
				<Select
					placeholder={levelSelected.name}
					options={level}
					handleSelect={handleSelect}
					isOpen={openSelect === 'level'}
					onToggle={() => setOpenSelect(openSelect === 'level' ? null : 'level')}
				/>
			</div>
			<div className="flex mt-5 justify-center items-center">
				<Button onClickAction={handleCreate}>
					{(isLoading || isLoadingEdit) && <Spinner />}
					{id ? 'Editar' : 'Criar'}
				</Button>
			</div>
		</div>
	);
}
