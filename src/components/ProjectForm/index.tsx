import { useEffect, useState } from 'react';
import { useGet } from '../../hooks/useGet';
import { InfoBody } from '../../types/InfoBody';
import Button from '../Button';
import { Select } from '../Select';

interface FormProps {
	id?: string;
	isOpen: () => void;
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
	{
		name: 'Org 5',
		id: '5',
	},
	{
		name: 'Org 6',
		id: '6',
	},
	{
		name: 'Org 7',
		id: '7',
	},
	{
		name: 'Org 8',
		id: '8',
	},
	{
		name: 'Org 9',
		id: '9',
	},
];

export default function ProjectForm({ id, isOpen }: FormProps) {
	const [name, setName] = useState('');
	const [openSelect, setOpenSelect] = useState<string | null>(null);
	const [org, setOrg] = useState<InfoBody>({ name: 'Escolha a organização', id: '' });
	const [squad, setSquad] = useState<InfoBody[]>([]);
	const { data: info, request: getInfo } = useGet<InfoBody[]>();
	const {
		data: organizations,
		isLoading: isLoadingOrganizations,
		request: getOrganizations,
	} = useGet<InfoBody[]>();

	useEffect(() => {
		getOrganizations('/organization/info');
		getInfo(`/project/info/${id}`);
		// if (info) {
		if (id) {
			// setName(info[0].name);
			setName('Nome de algo');
		}
	}, []);

	const handleCreate = () => {
		console.log(`Criar projeto`);
		// chamada api para criar
		console.log(name, org, squad);
		isOpen();
	};

	const handleSelect = (_placeholder: string, option: InfoBody) => {
		setOrg(option);
		setOpenSelect(null);
	};

	const handleMultiselect = (option: InfoBody) => {
		if (squad.includes(option)) {
			setSquad(squad.filter((s) => s.id !== option.id));
		} else {
			setSquad([...squad, option]);
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
					options={orgMock || []}
					handleSelect={handleSelect}
					isOpen={openSelect === 'org'}
					onToggle={() => setOpenSelect(openSelect === 'org' ? null : 'org')}
				/>
			</div>
			{/* <div className="flex items-end gap-2">
				<label
					className="text-lg mb-4 text-triider-grayscale-gray1 w-32 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
					htmlFor="name"
				>
					SQUADS
				</label>
				<Multiselect
					handleMultiselect={handleMultiselect}
					selected={squad}
					options={orgMock || []}
					isOpen={openSelect === 'squad'}
					onToggle={() => setOpenSelect(openSelect === 'squad' ? null : 'squad')}
				/>
			</div> */}

			<div className="flex mt-5 justify-center items-center">
				<Button onClickAction={handleCreate}>{name ? 'Editar' : 'Criar'}</Button>
			</div>
		</div>
	);
}
