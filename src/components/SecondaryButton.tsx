import React from 'react';
interface sideButtonProps {
	onClick: () => void;
	switchState: boolean;
	titulo: string;
	imageWhite: string;
	imageOrange: string;
}

const SecondaryButton: React.FC<sideButtonProps> = ({
	onClick,
	switchState,
	titulo,
	imageWhite,
	imageOrange,
}) => {
	return (
		<div
			onClick={onClick}
			className={`select-none cursor-pointer flex justify-start items-center w-full h-7 ${
				switchState ? 'bg-white' : 'bg-triider-primary-orange-dark'
			} space-x-4`}
		>
			<div className={'ml-10'}>
				{switchState ? <img src={imageOrange} /> : <img src={imageWhite} />}
			</div>
			<div className={`${switchState ? 'text-triider-primary-orange-dark' : 'text-white'}`}>
				<p>{titulo}</p>
			</div>
		</div>
	);
};

export default SecondaryButton;
