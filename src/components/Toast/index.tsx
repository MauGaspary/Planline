import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../assets/icons/closeIcon.svg';
import Button from '../Button';

interface ToastProps {
	sessions?: string[];
	isError?: boolean;
	errorMessage?: string;
}

interface ToastState {
	toastSession: string;
	toastOpen: boolean;
	isError: boolean;
	errorMessage: string;
}

const Toast = ({ sessions = [], isError = false, errorMessage = '' }: ToastProps) => {
	const [toasts, setToasts] = useState<ToastState[]>(
		sessions.map((item) => ({ toastSession: item, toastOpen: true, isError, errorMessage }))
	);

	const router = useNavigate();

	const redirectFunction = (sessionId: string) => {
		router(`/game/${sessionId}`);
	};

	const onCloseToast = (idx: number) => {
		setToasts((prev) => {
			prev[idx].toastOpen = false;
			return [...prev];
		});
	};

	return (
		<div className="fixed bottom-0 right-0 z-20">
			{toasts.map((item, idx) => {
				if (item.isError) {
					return (
						<div key={idx} className="relative bg-white mb-5 w-80 rounded-lg shadow-lg p-4 m-4">
							<img
								src={CloseIcon}
								onClick={() => onCloseToast(idx)}
								alt="close"
								className="cursor-pointer w-6 h-6 absolute top-1 right-1"
							/>
							<p>{item.errorMessage}</p>
						</div>
					);
				} else {
					return (
						item.toastOpen == true && (
							<div key={idx} className="relative bg-white mb-5 w-80 rounded-lg shadow-lg p-4 m-4">
								<img
									src={CloseIcon}
									onClick={() => onCloseToast(idx)}
									alt="close"
									className="cursor-pointer w-6 h-6 absolute top-1 right-1"
								/>
								<p>
									Você tem uma sessão em andamento. <br />
								</p>
								<p className="my-4">
									código: <b>{item.toastSession}</b>
								</p>
								<Button
									variant="primary"
									size="small"
									onClickAction={() => redirectFunction(item.toastSession)}
								>
									Entrar na sessão
								</Button>
							</div>
						)
					);
				}
			})}
		</div>
	);
};

export default Toast;
