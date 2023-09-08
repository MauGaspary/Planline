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
			<div className={'p-5 pt-8 w-20 h-72'}>
				<img src="src/assets/Simbolo Triider branco.png" />
			</div>
			<div>
				<Button onClick={toggleVisibilityB1} isVisible={isVisibleB1} titulo={'Dashboard'} />
				{isVisibleB1 && (
					<div className={''}>
						<SecondaryButton />
						<SecondaryButton />
						<SecondaryButton />
					</div>
				)}
			</div>
			<div>
				<Button onClick={toggleVisibilityB2} isVisible={isVisibleB2} titulo={'Gerenciar'} />
				{isVisibleB2 && (
					<div className={''}>
						<SecondaryButton />
						<SecondaryButton />
						<SecondaryButton />
						<SecondaryButton />
					</div>
				)}
			</div>
		</div>
	);
};

export default SideMenu;
