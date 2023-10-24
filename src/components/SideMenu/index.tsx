import React, { useState } from 'react';
import SideMenuItem from '../SideMenuItem';
import { useNavigate } from 'react-router-dom';

function SideMenu() {
	const [activeButton, setActiveButton] = useState<string | null>(null);
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
				<img className="inline-block h-14" src="src/assets/triiderLogos/logoWhite.svg" />
				<h1 className="inline-block text-2xl text-white font-medium align-middle">PlanLine</h1>
			</div>
			<ol className="">
				<SideMenuItem
					onClick={() => {
						handleActiveButton('votacao');
						handleNav('/import');
					}}
					isSelected={activeButton === 'votacao'}
					title={'Votação'}
					imageWhite={'src/assets/sideMenuIcons/talkWhite.svg'}
					imageOrange={'src/assets/sideMenuIcons/talkOrange.svg'}
				/>

				<SideMenuItem
					onClick={() => {
						handleActiveButton('usuarios');
						handleNav('/dashboard/users');
					}}
					isSelected={activeButton === 'usuarios'}
					title={'Usuários'}
					imageWhite={'src/assets/sideMenuIcons/groupWhite.svg'}
					imageOrange={'src/assets/sideMenuIcons/groupOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => {
						handleActiveButton('squads');
						handleNav('/dashboard/squads');
					}}
					isSelected={activeButton === 'squads'}
					title={'Squads'}
					imageWhite={'src/assets/sideMenuIcons/laptopWhite.svg'}
					imageOrange={'src/assets/sideMenuIcons/laptopOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => {
						handleActiveButton('projetos');
						handleNav('/dashboard/projects');
					}}
					isSelected={activeButton === 'projetos'}
					title={'Projetos'}
					imageWhite={'src/assets/sideMenuIcons/registerWhite.svg'}
					imageOrange={'src/assets/sideMenuIcons/registerOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => {
						handleActiveButton('organizacoes');
						handleNav('/dashboard/orgs');
					}}
					isSelected={activeButton === 'organizacoes'}
					title={'Organizações'}
					imageWhite="src/assets/sideMenuIcons/apartmentWhite.svg"
					imageOrange="src/assets/sideMenuIcons/apartmentOrange.svg"
				/>
			</ol>
		</nav>
	);
}

export default SideMenu;
