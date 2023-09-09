import React from 'react';
interface sideButtonProps {
	titulo: string;
	image: string;
}

const SecondaryButton: React.FC<sideButtonProps> = ({ titulo, image }) => {
	return (
		<div
			className={
				' flex justify-start items-center w-full h-7 bg-triider-primary-orange-dark space-x-4'
			}
		>
			<div className={'ml-10'}>
				<img src={image} />
			</div>
			<div className={'text-triider-grayscale-white'}>
				<p>{titulo}</p>
			</div>
		</div>
	);
};

export default SecondaryButton;
