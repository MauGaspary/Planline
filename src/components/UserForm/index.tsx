import { useEffect, useState } from 'react';
import { useGet } from '../../hooks/useGet';
import { InfoBody } from '../../types/InfoBody';
import Button from '../Button';
import { Select } from '../Select';

interface UserFormProps {
	id?: string;
	isOpen: () => void;
}

interface UserInfo {
	name: string;
	email: string;
	level: string;
	squad: InfoBody[];
}

const orgMock = [
	{
		name: 'Org 1',
		id: '1',
	},
	{
		name: 'Org 2',
		id: '2',
	},
	{
		name: 'Org 3',
		id: '3',
	},
	{
		name: 'Org 4',
		id: '4',
	},
];

const squadsMock = [
	{
		name: 'Squad 1',
		id: '1',
	},
	{
		name: 'Squad 2',
		id: '2',
	},
	{
		name: 'Squad 3',
		id: '3',
	},
	{
		name: 'Squad 4',
		id: '4',
	},
];

const levelMock = [
	{
		name: 'Junior',
		id: '1',
	},
	{
		name: 'Estagiário',
		id: '2',
	},
	{
		name: 'Pleno',
		id: '3',
	},
	{
		name: 'Senior',
		id: '4',
	},
];

const mockUser = {
	name: 'João',
	email: 'joao@email.com',
	level: 'Junior',
	squad: [
		{
			name: 'Squad 1',
			id: '1',
		},
	],
};

export default function UserForm({ id, isOpen }: UserFormProps) {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [openSelect, setOpenSelect] = useState<string | null>(null);
	const [levelSelected, setLevel] = useState('Escolha o nível');
	const [org, setOrg] = useState<InfoBody>({ name: 'Escolha a organização', id: '' });
	const [squad, setSquad] = useState<InfoBody[]>([]);
	const { data: squads, request: getSquads } = useGet<InfoBody[]>();
	const { data: userInfo, request: getUser } = useGet<UserInfo>();

	const handleSelect = (placeholder: string, option: InfoBody) => {
		if (placeholder === levelSelected) {
			setLevel(option.name);
		}
		setOpenSelect(null);
	};

	const handleMultiselect = (option: InfoBody) => {
		if (squad.includes(option)) {
			setSquad(squad.filter((s) => s.id !== option.id));
		} else {
			setSquad([...squad, option]);
		}
	};

	useEffect(() => {
		getSquads(`/squad/info`);
		getUser(`/user/info/${id}`);
		// if (userInfo) {
		if (id) {
			const { name, email, level, squad } = mockUser;
			// const { name, email, level, squad } = userInfo || {};
			setUserName(name);
			setUserEmail(email);
			setLevel(level);
			setSquad(squad);
		}
	}, []);

	const handleCreateUser = () => {
		console.log('criar usuário');
		// criar usuário chamada api
		console.log(userName, userEmail, levelSelected, squads);
		isOpen();
	};

	const handleSelectOrg = (_placeholder: string, option: InfoBody) => {
		setOrg(option);
		setOpenSelect(null);
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
					placeholder={levelSelected}
					options={levelMock || []}
					handleSelect={handleSelect}
					isOpen={openSelect === 'level'}
					onToggle={() => setOpenSelect(openSelect === 'level' ? null : 'level')}
				/>
			</div>
			<div className="flex items-end gap-2">
				<label
					className="text-lg mb-4 text-triider-grayscale-gray1 w-32 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
					htmlFor="org"
				>
					ORGANIZAÇÃO
				</label>
				<Select
					placeholder={org.name}
					options={orgMock || []}
					handleSelect={handleSelectOrg}
					isOpen={openSelect === 'org'}
					onToggle={() => setOpenSelect(openSelect === 'org' ? null : 'org')}
				/>
			</div>
			<div className="flex mt-5 justify-center items-center">
				<Button onClickAction={handleCreateUser}>{userName ? 'Editar' : 'Criar'}</Button>
			</div>
		</div>
	);
}
