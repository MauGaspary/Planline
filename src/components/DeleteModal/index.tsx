import { useEffect, useState } from 'react';
import closeIcon from '../../assets/icons/closeIcon.svg';
import trashIcon from '../../assets/icons/trashIcon.svg';
import Button from '../Button';
import { useDelete } from '../../hooks/useDelete';
import Spinner from '../Spinner';
import { useGet } from '../../hooks/useGet';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	id: string;
	type: string;
	update: () => void;
};

const DeleteModal = ({ isOpen, onClose, type, id, update }: ModalProps) => {
	const { data: deleteInfoData, isLoading, error, request: deleteInfo } = useDelete<T>();
	const { data: info, request: getInfo } = useGet<T>();
	const [title, setTitle] = useState('');

	useEffect(() => {
		if (id) {
			getInfo(`/${type}/${id}`);
		}
	}, [id]);

	useEffect(() => {
		if (info) {
			setTitle(info.name || '');
		}
	}, [info]);

	useEffect(() => {
		if (deleteInfoData) {
			console.log(`Deletou usuario`);
			onClose();
			update();
		} else if (error) {
			console.log(`Deu erro, `, error);
		}
	}, [deleteInfoData, error]);

	if (!isOpen) {
		return null;
	}

	const handleDelete = () => {
		if (id) {
			deleteInfo(`/${type}/${id}`);
		}
	};

	return (
		<>
			<div
				id="overlay"
				className="fixed h-screen w-screen top-0 left-0 z-20 bg-black bg-opacity-50"
				onClick={onClose}
			></div>
			<div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
				<div className="flex flex-col items-center min-w-fit w-fit border-2 p-16 bg-white rounded-3xl relative">
					<button className="absolute top-4 right-4" onClick={onClose}>
						<img className="w-8 h-8" src={closeIcon} />
					</button>
					<img className="w-28" src={trashIcon} alt="Lixeira" />
					<h1 className="text-2xl font-bold decoration-triider-primary-orange2 my-8 underline-offset-8">
						Tem certeza que deseja excluir
						{type === 'project'
							? ` o projeto ${title}?`
							: type === 'organization'
							? ` a organização ${title}?`
							: type === 'squad'
							? ` a squad ${title}?`
							: ` o usuário ${title}?`}
					</h1>
					<div className="flex gap-5 justify-center mt-4">
						<Button variant="secondary" onClickAction={onClose}>
							Cancelar
						</Button>
						<Button variant="alert" onClickAction={handleDelete}>
							{isLoading && <Spinner />}
							Excluir
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteModal;
