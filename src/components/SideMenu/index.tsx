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
					imageWhite={'src/assets/talkWhite.svg'}
					imageOrange={'src/assets/talkOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('usuarios')}
					isSelected={activeButton === 'usuarios'}
					title={'Usuários'}
					imageWhite={'src/assets/groupWhite.svg'}
					imageOrange={'src/assets/groupOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('squads')}
					isSelected={activeButton === 'squads'}
					title={'Squads'}
					imageWhite={'src/assets/laptopWhite.svg'}
					imageOrange={'src/assets/laptopOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('projetos')}
					isSelected={activeButton === 'projetos'}
					title={'Projetos'}
					imageWhite={'src/assets/registerWhite.svg'}
					imageOrange={'src/assets/registerOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('organizacoes')}
					isSelected={activeButton === 'organizacoes'}
					title={'Organizações'}
					imageWhite="src/assets/apartmentWhite.svg"
					imageOrange="src/assets/apartmentOrange.svg"
				/>
			</ol>
		</nav>
	);
};

export default SideMenu;
