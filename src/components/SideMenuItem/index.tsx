import React, { useState } from 'react';
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
	const [isHovered, setIsHovered] = useState<boolean>(false);

	/* const handleHover = () => {
		setIsHovered(true);
	};*/

	return (
		<li
			onClick={onClick}
			className={`select-none cursor-pointer flex items-center ${
				isSelected ? 'bg-white p-4 -mx-4' : 'bg-triider-primary-orange-dark'
			} space-x-4 h-12
			hover:bg-triider-primary-orange2 [&>*]:hover:text-white hover:p-4 hover:-mx-4`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="">
				{<img src={isHovered ? imageWhite : isSelected ? imageOrange : imageWhite} />}
			</div>
			<div className={`${isSelected ? 'text-triider-primary-orange-dark' : 'text-white'}`}>
				<p className="text-xl font-medium">{title}</p>
			</div>
		</li>
	);
};

export default SideMenuItem;
