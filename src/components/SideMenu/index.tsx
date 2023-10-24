import React, { useState } from 'react';
import SideMenuItem from '../SideMenuItem';
import { Link } from 'react-router-dom';

function SideMenu() {
	const [activeButton, setActiveButton] = useState<string | null>(null);

	const handleActiveButton = (buttonName: string) => {
		setActiveButton(buttonName);
	};

	return (
		<nav className="flex-col w-64 px-4 h-screen absolute bg-triider-primary-orange-dark">
			<div className="py-10 space-x-4">
				<img className="inline-block h-14" src="src/assets/triiderLogos/logoWhite.svg" />
				<h1 className="inline-block text-2xl text-white font-medium align-middle">PlanLine</h1>
			</div>
			<ol className="">
				<Link to="/import">
					<SideMenuItem
						onClick={() => handleActiveButton('votacao')}
						isSelected={activeButton === 'votacao'}
						title={'Votação'}
						imageWhite={'src/assets/sideMenuIcons/talkWhite.svg'}
						imageOrange={'src/assets/sideMenuIcons/talkOrange.svg'}
					/>
				</Link>
				<SideMenuItem
					onClick={() => {
						handleActiveButton('usuarios');
						// handleNav('/dashboard/usuarios');
					}}
					isSelected={activeButton === 'usuarios'}
					title={'Usuários'}
					imageWhite={'src/assets/sideMenuIcons/groupWhite.svg'}
					imageOrange={'src/assets/sideMenuIcons/groupOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => {
						handleActiveButton('squads');
						// handleNav('/dashboard/squads');
					}}
					isSelected={activeButton === 'squads'}
					title={'Squads'}
					imageWhite={'src/assets/sideMenuIcons/laptopWhite.svg'}
					imageOrange={'src/assets/sideMenuIcons/laptopOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleActiveButton('projetos')}
					isSelected={activeButton === 'projetos'}
					title={'Projetos'}
					imageWhite={'src/assets/sideMenuIcons/registerWhite.svg'}
					imageOrange={'src/assets/sideMenuIcons/registerOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleActiveButton('organizacoes')}
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
