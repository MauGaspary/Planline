import { ReactNode } from 'react';
import closeIcon from '../../assets/icons/closeIcon.svg';

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
	title?: string;
};

const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
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
				<div className="flex flex-col min-w-fit w-fit border-2 p-16 bg-white rounded-lg relative">
					<h1 className="text-4xl font-bold underline decoration-triider-primary-orange2 mb-6 underline-offset-8">
						{title?.toUpperCase()}
					</h1>
					<button className="absolute top-4 right-4" onClick={onClose}>
						<img className="w-8 h-8" src={closeIcon} />
					</button>
					{children}
				</div>
			</div>
		</>
	);
};

export default Modal;
