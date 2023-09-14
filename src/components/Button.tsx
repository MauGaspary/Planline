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
				'select-none cursor-pointer flex justify-start items-center w-full h-14 bg-red space-x-8'
			}
		>
			<div className={'ml-2'}>
				<img src={image} />
			</div>
			<div className={'text-triider-grayscale-white w-24'}>
				<p>{titulo}</p>
			</div>
			<div>
				{isVisible ? (
					<img src="src\assets\down3White.svg" />
				) : (
					<img src="src\assets\up3White.svg " />
				)}
			</div>
		</div>
	);
};

export default Button;
