import React from 'react';

interface ButtonProps {
	onClick: () => void;
	isVisible: boolean;
	titulo: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, isVisible, titulo }) => {
	return (
		<div
			onClick={onClick}
			className={' flex justify-start items-center w-full h-14 bg-fuchsia-500 space-x-12'}
		>
			<div className={''}>
				<h1>foto</h1>
			</div>
			<div className={''}>
				<p>{titulo}</p>
			</div>
			<div>{isVisible ? <h1>oi</h1> : <h1>bye</h1>}</div>
		</div>
	);
};

export default Button;
