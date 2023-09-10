import React, { useState } from 'react';
import Button from './Button';
import SecondaryButton from './SecondaryButton';

const SideMenu: React.FC = () => {
	const [isVisibleB1, setIsVisibleB1] = useState(false);
	const [isVisibleB2, setIsVisibleB2] = useState(false);

	const [activeButton, setActiveButton] = useState<string | null>(null);

	const toggleVisibilityB1 = () => {
		setIsVisibleB1(!isVisibleB1);
	};
	const toggleVisibilityB2 = () => {
		setIsVisibleB2(!isVisibleB2);
	};

	const handleButtonClick = (buttonName: string) => {
		setActiveButton(buttonName);
	};

	return (
		<div className={'w-64 h-screen bg-triider-primary-orange-dark '}>
			<div className={'w-full  flex justify-center p-6'}>
				<img className={'w-44'} src="src/assets/Triiderwhiteprhase.png" />
			</div>
			<div className={'mt-52'}>
				<Button
					onClick={toggleVisibilityB1}
					isVisible={isVisibleB1}
					titulo={'Dashboard'}
					image="src/assets/talkWhite.svg"
				/>
				{isVisibleB1 && (
					<div className={''}>
						<SecondaryButton
							onClick={() => handleButtonClick('user')}
							switchState={activeButton === 'user'}
							titulo={'Usuario'}
							imageWhite={'src/assets/userWhite.svg'}
							imageOrange={'src/assets/userOrange.svg'}
						/>
						<SecondaryButton
							onClick={() => handleButtonClick('download')}
							switchState={activeButton === 'download'}
							titulo={'Importar'}
							imageWhite={'src/assets/downloadWhite.svg'}
							imageOrange={'src/assets/downloadOrange.svg'}
						/>
						<SecondaryButton
							onClick={() => handleButtonClick('upload')}
							switchState={activeButton === 'upload'}
							titulo={'Exportar'}
							imageWhite={'src/assets/uploadWhite.svg'}
							imageOrange={'src/assets/uploadOrange.svg'}
						/>
					</div>
				)}
			</div>
			<div>
				<Button
					onClick={toggleVisibilityB2}
					isVisible={isVisibleB2}
					titulo={'Gerenciar'}
					image="src/assets/configWhite.svg"
				/>
				{isVisibleB2 && (
					<div className={''}>
						<SecondaryButton
							onClick={() => handleButtonClick('group')}
							switchState={activeButton === 'group'}
							titulo={'Usuários'}
							imageWhite={'src/assets/groupWhite.svg'}
							imageOrange={'src/assets/groupOrange.svg'}
						/>
						<SecondaryButton
							onClick={() => handleButtonClick('laptop')}
							switchState={activeButton === 'laptop'}
							titulo={'Squads'}
							imageWhite={'src/assets/laptopWhite.svg'}
							imageOrange={'src/assets/laptopOrange.svg'}
						/>
						<SecondaryButton
							onClick={() => handleButtonClick('register')}
							switchState={activeButton === 'register'}
							titulo={'Projetos'}
							imageWhite={'src/assets/registerWhite.svg'}
							imageOrange={'src/assets/registerOrange.svg'}
						/>
						<SecondaryButton
							onClick={() => handleButtonClick('apartment')}
							switchState={activeButton === 'apartment'}
							titulo={'Organizações'}
							imageWhite="src/assets/apartmentWhite.svg"
							imageOrange="src/assets/apartmentOrange.svg"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default SideMenu;
