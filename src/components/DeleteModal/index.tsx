import closeIcon from '../../assets/icons/closeIcon.svg';
import Button from '../Button';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	type: string;
	onDelete: () => void;
};

const DeleteModal = ({ isOpen, onClose, title, type, onDelete }: ModalProps) => {
	if (!isOpen) {
		return null;
	}

	return (
		<>
			<div
				id="overlay"
				className="fixed h-screen w-screen top-0 left-0 z-20 bg-black bg-opacity-50"
				onClick={onClose}
			></div>
			<div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
				<div className="flex flex-col min-w-fit w-fit border-2 p-16 bg-white rounded-3xl relative">
					<button className="absolute top-4 right-4" onClick={onClose}>
						<img className="w-8 h-8" src={closeIcon} />
					</button>
					<img src="" alt="" />
					<h1 className="text-4xl font-bold max-w-[] underline decoration-triider-primary-orange2 mb-6 underline-offset-8">
						{'Tem certeza que deseja excluir' + type === 'project'
							? ` o projeto ${title}?`
							: type === 'organization'
							? ` a organização ${title}?`
							: type === 'squad'
							? ` a squad ${title}?`
							: ` o usuário ${title}?`}
					</h1>
					<Button onClickAction={onClose}>Cancelar</Button>
					<Button onClickAction={onDelete}>Excluir</Button>
				</div>
			</div>
		</>
	);
};

export default DeleteModal;
