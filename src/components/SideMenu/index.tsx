import React, { useState } from 'react';
import SideMenuItem from '../SideMenuItem';

const SideMenu = () => {
	const [activeButton, setActiveButton] = useState<string | null>(null);

	const handleButtonClick = (buttonName: string) => {
		setActiveButton(buttonName);
	};

	return (
		<nav className="flex-col w-64 px-4 h-screen bg-triider-primary-orange-dark">
			<div className="py-10 space-x-4">
				<img className="inline-block h-14" src="src/assets/triiderLogos/whiteVersion.svg" />
				<h1 className="inline-block text-2xl text-white font-medium align-middle">PlanLine</h1>
			</div>
			<ol className="">
				<SideMenuItem
					onClick={() => handleButtonClick('votacao')}
					isSelected={activeButton === 'votacao'}
					title={'Votação'}
					imageWhite={'src/assets/sideMenuIcons/talkWhite.svg'}
					imageOrange={'src/assets/sideMenuIcons/talkOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('usuarios')}
					isSelected={activeButton === 'usuarios'}
					title={'Usuários'}
					imageWhite={'src/assets/sideMenuIcons/groupWhite.svg'}
					imageOrange={'src/assets/sideMenuIcons/groupOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('squads')}
					isSelected={activeButton === 'squads'}
					title={'Squads'}
					imageWhite={'src/assets/sideMenuIcons/laptopWhite.svg'}
					imageOrange={'src/assets/sideMenuIcons/laptopOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('projetos')}
					isSelected={activeButton === 'projetos'}
					title={'Projetos'}
					imageWhite={'src/assets/sideMenuIcons/registerWhite.svg'}
					imageOrange={'src/assets/sideMenuIcons/registerOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('organizacoes')}
					isSelected={activeButton === 'organizacoes'}
					title={'Organizações'}
					imageWhite="src/assets/sideMenuIcons/apartmentWhite.svg"
					imageOrange="src/assets/sideMenuIcons/apartmentOrange.svg"
				/>
			</ol>
		</nav>
	);
};

export default SideMenu;
