import { Link } from 'react-router-dom';

interface SideMenuProps {
	label: string;
	linkTo: string;
}

function SideMenu({ label, linkTo }: SideMenuProps) {
	return (
		<div className="bg-green-600 w-20">
			<Link to={linkTo}>
				<h2 className="text-white text-center">{label}</h2>
			</Link>
		</div>
	);
}

export default SideMenu;
