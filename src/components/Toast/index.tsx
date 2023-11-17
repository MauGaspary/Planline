import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../assets/icons/closeIcon.svg';
import Button from '../Button';
import Warning from '../../assets/icons/warning.svg';

interface ToastProps {
	sessions?: string[];
	isError?: boolean;
	message?: string;
}

interface ToastState {
	toastSession?: string;
	toastOpen: boolean;
	isError: boolean;
	message: string;
}

const Toast = ({ sessions = [], isError = false, message = '' }: ToastProps) => {
	if (sessions.length === 0 && !isError) {
		return null;
	}
	const initialToasts =
		sessions.length > 0
			? sessions.map((item) => ({ toastSession: item, toastOpen: true, isError, message }))
			: [{ toastSession: '', toastOpen: true, isError, message }];

	const [toasts, setToasts] = useState<ToastState[]>(initialToasts);

	const router = useNavigate();

	const redirectFunction = (sessionId?: string) => {
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
						item.toastOpen == true && (
							<div key={idx} className="relative bg-white mb-5 w-80 rounded-lg shadow-lg p-4 m-4">
								<img
									src={CloseIcon}
									onClick={() => onCloseToast(idx)}
									alt="close"
									className="cursor-pointer w-6 h-6 absolute top-1 right-1"
								/>
								<div className="flex gap-5">
									<img src={Warning} alt="warning" className="w-8 h-8" />
									<p className="text-xl">{item.message}</p>
								</div>
							</div>
						)
					);
				} else if (item.toastSession) {
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
									CÓDIGO: <b>{item.toastSession}</b>
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
				} else if (!item.toastSession && !item.isError) {
					return (
						<div key={idx} className="relative bg-white mb-5 w-80 rounded-lg shadow-lg p-4 m-4">
							<img
								src={CloseIcon}
								onClick={() => onCloseToast(idx)}
								alt="close"
								className="cursor-pointer w-6 h-6 absolute top-1 right-1"
							/>
							<div className="flex gap-5">
								<img src={Warning} alt="warning" className="w-8 h-8" />
								<p className="text-xl">{item.message}</p>
							</div>
						</div>
					);
				}
			})}
		</div>
	);
};

export default Toast;
