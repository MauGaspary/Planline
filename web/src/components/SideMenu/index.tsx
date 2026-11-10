import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideMenuItem from '../SideMenuItem';
import logoWhite from '../../assets/triiderLogos/logoWhite.svg';
import talkWhite from '../../assets/sideMenuIcons/talkWhite.svg';
import talkOrange from '../../assets/sideMenuIcons/talkOrange.svg';
import apartmentWhite from '../../assets/sideMenuIcons/apartmentWhite.svg';
import apartmentOrange from '../../assets/sideMenuIcons/apartmentOrange.svg';
import registerWhite from '../../assets/sideMenuIcons/registerWhite.svg';
import registerOrange from '../../assets/sideMenuIcons/registerOrange.svg';
import laptopWhite from '../../assets/sideMenuIcons/laptopWhite.svg';
import laptopOrange from '../../assets/sideMenuIcons/laptopOrange.svg';
import groupWhite from '../../assets/sideMenuIcons/groupWhite.svg';
import groupOrange from '../../assets/sideMenuIcons/groupOrange.svg';
import historyOrange from '../../assets/sideMenuIcons/historyOrange.svg';
import historyWhite from '../../assets/sideMenuIcons/historyWhite.svg';

function SideMenu() {
	const [activeButton, setActiveButton] = useState<string | null>(window.location.pathname);
	const router = useNavigate();

	const handleActiveButton = (buttonName: string) => {
		setActiveButton(buttonName);
	};

	const handleNav = (path: string) => {
		router(path);
	};

	return (
		<nav className="flex-col w-64 px-4 h-screen absolute bg-triider-primary-orange-dark">
			<div className="py-10 space-x-4">
				<img className="inline-block h-14" src={logoWhite} />
				<h1 className="inline-block text-2xl text-white font-medium align-middle">PlanLine</h1>
			</div>
			<ol>
				<SideMenuItem
					onClick={() => {
						handleActiveButton('/');
						handleNav('/');
					}}
					isSelected={activeButton === '/'}
					title={'Votação'}
					imageWhite={talkWhite}
					imageOrange={talkOrange}
				/>
				<SideMenuItem
					onClick={() => {
						handleActiveButton('/history');
						handleNav('/history');
					}}
					isSelected={activeButton === '/history'}
					title="Histórico"
					imageWhite={historyWhite}
					imageOrange={historyOrange}
				/>
				<SideMenuItem
					onClick={() => {
						handleActiveButton('/dashboard/orgs');
						handleNav('/dashboard/orgs');
					}}
					isSelected={activeButton === '/dashboard/orgs'}
					title="Organizações"
					imageWhite={apartmentWhite}
					imageOrange={apartmentOrange}
				/>
				<SideMenuItem
					onClick={() => {
						handleActiveButton('/dashboard/projects');
						handleNav('/dashboard/projects');
					}}
					isSelected={activeButton === '/dashboard/projects'}
					title="Projetos"
					imageWhite={registerWhite}
					imageOrange={registerOrange}
				/>
				<SideMenuItem
					onClick={() => {
						handleActiveButton('/dashboard/squads');
						handleNav('/dashboard/squads');
					}}
					isSelected={activeButton === '/dashboard/squads'}
					title="Squads"
					imageWhite={laptopWhite}
					imageOrange={laptopOrange}
				/>
				<SideMenuItem
					onClick={() => {
						handleActiveButton('/dashboard/users');
						handleNav('/dashboard/users');
					}}
					isSelected={activeButton === '/dashboard/users'}
					title="Usuários"
					imageWhite={groupWhite}
					imageOrange={groupOrange}
				/>
			</ol>
		</nav>
	);
}

export default SideMenu;
