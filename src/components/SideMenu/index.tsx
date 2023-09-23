import React, { useState } from 'react';
// import SideMenuGroup from '../SideMenuGroup';
import SideMenuItem from '../SideMenuItem';

const SideMenu: React.FC = () => {
	/* const [isVisibleB1, setIsVisibleB1] = useState(false);
	const [isVisibleB2, setIsVisibleB2] = useState(false);
 */
	const [activeButton, setActiveButton] = useState<string | null>(null);

	/* const toggleVisibilityB1 = () => {
		setIsVisibleB1(!isVisibleB1);
	};
	const toggleVisibilityB2 = () => {
		setIsVisibleB2(!isVisibleB2);
	}; */

	const handleButtonClick = (buttonName: string) => {
		setActiveButton(buttonName);
	};

	return (
		<div className="w-64 h-screen bg-triider-primary-orange-dark ">
			<div className="w-full  flex justify-center p-6">
				<img className="w-44" src="src/assets/Triiderwhiteprhase.png" />
			</div>
			<div className="mt-52">
				<SideMenuItem
					onClick={() => handleButtonClick('planline')}
					isSelected={activeButton === 'planline'}
					title={'Plan Line'}
					imageWhite={'src/assets/talkWhite.svg'}
					imageOrange={'src/assets/talkOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('iniciar')}
					isSelected={activeButton === 'iniciar'}
					title={'Iniciar'}
					imageWhite={'src/assets/groupWhite.svg'}
					imageOrange={'src/assets/groupOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('laptop')}
					isSelected={activeButton === 'laptop'}
					title={'Squads'}
					imageWhite={'src/assets/laptopWhite.svg'}
					imageOrange={'src/assets/laptopOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('register')}
					isSelected={activeButton === 'register'}
					title={'Projetos'}
					imageWhite={'src/assets/registerWhite.svg'}
					imageOrange={'src/assets/registerOrange.svg'}
				/>
				<SideMenuItem
					onClick={() => handleButtonClick('apartment')}
					isSelected={activeButton === 'apartment'}
					title={'Organizações'}
					imageWhite="src/assets/apartmentWhite.svg"
					imageOrange="src/assets/apartmentOrange.svg"
				/>

				{/* <SideMenuGroup
					onClick={toggleVisibilityB1}
					isVisible={isVisibleB1}
					title={'Plan Line'}
					image="src/assets/talkWhite.svg"
				/>
				<SideMenuGroup
					onClick={toggleVisibilityB1}
					isVisible={isVisibleB1}
					title={'Iniciar'}
					image="src/assets/groupWhite.svg"
				/>
				<SideMenuGroup
					onClick={toggleVisibilityB1}
					isVisible={isVisibleB1}
					title={'Squads'}
					image="src/assets/laptopWhite.svg"
				/>
				<SideMenuGroup
					onClick={toggleVisibilityB1}
					isVisible={isVisibleB1}
					title={'Projetos'}
					image="src/assets/register.svg"
				/>
				<SideMenuGroup
					onClick={toggleVisibilityB1}
					isVisible={isVisibleB1}
					title={'Organizações'}
					image="src/assets/apartment.svg"
				/> */}
				{/* {isVisibleB1 && (
					<div className="">
						<SideMenuItem
							onClick={() => handleButtonClick('user')}
							isSelected={activeButton === 'user'}
							title={'Usuario'}
							imageWhite={'src/assets/userWhite.svg'}
							imageOrange={'src/assets/userOrange.svg'}
						/>
						<SideMenuItem
							onClick={() => handleButtonClick('download')}
							isSelected={activeButton === 'download'}
							title={'Importar'}
							imageWhite={'src/assets/downloadWhite.svg'}
							imageOrange={'src/assets/downloadOrange.svg'}
						/>
						<SideMenuItem
							onClick={() => handleButtonClick('upload')}
							isSelected={activeButton === 'upload'}
							title={'Exportar'}
							imageWhite={'src/assets/uploadWhite.svg'}
							imageOrange={'src/assets/uploadOrange.svg'}
						/>
					</div>
				)} */}
			</div>
			<div>
				{/* <SideMenuGroup
					onClick={toggleVisibilityB2}
					isVisible={isVisibleB2}
					title={'Gerenciar'}
					image="src/assets/configWhite.svg"
				/> */}
				{/* {isVisibleB2 && (
					<div className="">
						<SideMenuItem
							onClick={() => handleButtonClick('group')}
							isSelected={activeButton === 'group'}
							title={'Usuários'}
							imageWhite={'src/assets/groupWhite.svg'}
							imageOrange={'src/assets/groupOrange.svg'}
						/>
						<SideMenuItem
							onClick={() => handleButtonClick('laptop')}
							isSelected={activeButton === 'laptop'}
							title={'Squads'}
							imageWhite={'src/assets/laptopWhite.svg'}
							imageOrange={'src/assets/laptopOrange.svg'}
						/>
						<SideMenuItem
							onClick={() => handleButtonClick('register')}
							isSelected={activeButton === 'register'}
							title={'Projetos'}
							imageWhite={'src/assets/registerWhite.svg'}
							imageOrange={'src/assets/registerOrange.svg'}
						/>
						<SideMenuItem
							onClick={() => handleButtonClick('apartment')}
							isSelected={activeButton === 'apartment'}
							title={'Organizações'}
							imageWhite="src/assets/apartmentWhite.svg"
							imageOrange="src/assets/apartmentOrange.svg"
						/>
					</div>
				)} */}
			</div>
		</div>
	);
};

export default SideMenu;
