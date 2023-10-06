import React from 'react';
interface SideMenuItemProps {
	onClick: () => void;
	isSelected: boolean;
	title: string;
	imageWhite: string;
	imageOrange: string;
}

const SideMenuItem = ({
	onClick,
	isSelected,
	title,
	imageWhite,
	imageOrange,
}: SideMenuItemProps) => {
	return (
		<div
			onClick={onClick}
			className={`select-none cursor-pointer flex justify-start items-center w-full h-7 ${
				isSelected ? 'bg-white' : 'bg-triider-primary-orange-dark'
			} space-x-4`}
		>
			<div className="ml-4 ">
				{isSelected ? <img src={imageOrange} /> : <img src={imageWhite} />}
			</div>
			<div className={`${isSelected ? 'text-triider-primary-orange-dark' : 'text-white'}`}>
				<p className="text-xl font-semibold">{title}</p>
			</div>
		</div>
	);
};

export default SideMenuItem;
