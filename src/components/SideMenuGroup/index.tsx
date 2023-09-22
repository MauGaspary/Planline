import React from 'react';

interface SideMenuGroupProps {
	onClick: () => void;
	isVisible: boolean;
	title: string;
	image: string;
}

const SideMenuGroup = ({ onClick, isVisible, title, image }: SideMenuGroupProps) => {
	return (
		<div
			onClick={onClick}
			className="select-none cursor-pointer flex justify-start items-center w-full h-14 bg-red space-x-8"
		>
			<div className="ml-2">
				<img src={image} />
			</div>
			<div className="text-triider-grayscale-white w-24">
				<p>{title}</p>
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

export default SideMenuGroup;
