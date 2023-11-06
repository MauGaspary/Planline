interface ToastProps {
	// TODO
	todo?: string;
}

const Toast = ({ todo }: ToastProps) => {
	return <div>TOAST {todo}</div>;
};

export default Toast;
