import { useEffect, useState } from 'react';
import { useGet } from '../../hooks/useGet';
import { InfoBody } from '../../types/InfoBody';
import Button from '../Button';

interface FormProps {
	id?: string;
	type: string;
	isOpen: () => void;
}

export default function GenericForm({ id, type, isOpen }: FormProps) {
	const [name, setName] = useState('');
	const { data: info, request: getInfo } = useGet<InfoBody[]>();

	useEffect(() => {
		getInfo(`/${type}/info/${id}`);
		// if (info) {
		if (id) {
			// setName(info[0].name);
			setName('Nome de algo');
		}
	}, []);

	const handleCreateUser = () => {
		console.log(`Criar ${type}`);
		// chamada api para criar
		console.log(name);
		isOpen();
	};

	return (
		<div className="flex flex-col gap-4 justify-center">
			<div className="flex items-end gap-2">
				<label
					className="text-lg mb-4 text-triider-grayscale-gray1 w-20 mr-6 font-bold underline decoration-triider-grayscale-gray3 underline-offset-[18px]"
					htmlFor="name"
				>
					NOME
				</label>
				<input
					type="text"
					id="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder={`Digite o nome d${type == 'squad' ? 'a' : 'o'} ${type}`}
					className="block p-4 w-full text-sm border border-triider-grayscale-gray3 rounded-lg bg-triider-grayscale-gray4 focus:outline-none focus:ring-2 focus:ring-triider-primary-orange2"
				/>
			</div>
			<div className="flex mt-5 justify-center items-center">
				<Button onClickAction={handleCreateUser}>{name ? 'Editar' : 'Criar'}</Button>
			</div>
		</div>
	);
}
