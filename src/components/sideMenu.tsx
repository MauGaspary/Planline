import Button from './Button';

function SideMenu() {
	return (
		<div className={'w-20 h-screen bg-triider-primary-orange-dark '}>
			<div className={'p-5 pt-8 h-96'}>
				<img src="src/assets/Simbolo Triider branco.png" />
			</div>
			<Button />

			<Button />

			<Button />
		</div>
	);
}

export default SideMenu;
