import React, { useState } from 'react';
import Button from './Button';
import SecondaryButton from './SecondaryButton';

const SideMenu: React.FC = () => {
	const [isVisibleB1, setIsVisibleB1] = useState(false);
	const [isVisibleB2, setIsVisibleB2] = useState(false);

	const toggleVisibilityB1 = () => {
		setIsVisibleB1(!isVisibleB1);
	};
	const toggleVisibilityB2 = () => {
		setIsVisibleB2(!isVisibleB2);
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
					image="src/assets/talk.svg"
				/>
				{isVisibleB1 && (
					<div className={''}>
						<SecondaryButton titulo={'Usuario'} image={'src/assets/user.svg'} />
						<SecondaryButton titulo={'Importar'} image={'src/assets/download.svg'} />
						<SecondaryButton titulo={'Exportar'} image={'src/assets/upload.svg'} />
					</div>
				)}
			</div>
			<div>
				<Button
					onClick={toggleVisibilityB2}
					isVisible={isVisibleB2}
					titulo={'Gerenciar'}
					image="src/assets/config.svg"
				/>
				{isVisibleB2 && (
					<div className={''}>
						<SecondaryButton titulo={'Usuários'} image={'src/assets/group.svg'} />
						<SecondaryButton titulo={'Squads'} image={'src/assets/laptop.svg'} />
						<SecondaryButton titulo={'Projetos'} image={'src/assets/register.svg'} />
						<SecondaryButton titulo={'Organizações'} image={'src/assets/apartment.svg'} />
					</div>
				)}
			</div>
		</div>
	);
};

export default SideMenu;
