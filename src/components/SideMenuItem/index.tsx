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
		<li
			onClick={onClick}
			className={`select-none cursor-pointer flex items-center -mx-4 p-4 transition-all space-x-4 h-12 hover:p-6 hover:-mx-4 ${
				isSelected
					? 'bg-white p-4'
					: 'bg-triider-primary-orange-dark hover:bg-triider-primary-orange2'
			}`}
		>
			<div className="">{<img src={isSelected ? imageOrange : imageWhite} />}</div>
			<div className={`${isSelected ? 'text-triider-primary-orange-dark' : 'text-white'}`}>
				<p className="text-xl font-medium">{title}</p>
			</div>
		</li>
	);
};

export default SideMenuItem;
