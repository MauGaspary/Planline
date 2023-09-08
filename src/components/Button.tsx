import React from 'react';

interface ButtonProps {
	onClick: () => void;
	isVisible: boolean;
	titulo: string;
	image: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, isVisible, titulo, image }) => {
	return (
		<div
			onClick={onClick}
			className={
				' flex justify-start items-center w-full h-14 bg-triider-primary-orange-dark space-x-8'
			}
		>
			<div className={'ml-2'}>
				<img src={image} />
			</div>
			<div className={'text-triider-grayscale-white'}>
				<p>{titulo}</p>
			</div>
			<div>
				{isVisible ? <img src="src\assets\down3.svg" /> : <img src="src\assets\up3.svg " />}
			</div>
		</div>
	);
};

export default Button;
