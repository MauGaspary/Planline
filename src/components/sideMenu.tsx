import Button from './Button';
import SecondaryButton from './SecondaryButton';

function SideMenu() {
	return (
		<div className={'w-64 h-screen bg-triider-primary-orange-dark '}>
			<div className={'p-5 pt-8 w-20 h-72'}>
				<img src="src/assets/Simbolo Triider branco.png" />
			</div>
			<div>
				<Button />
				<div className={''}>
					<SecondaryButton />
					<SecondaryButton />
					<SecondaryButton />
				</div>
			</div>
			<div>
				<Button />
				<SecondaryButton />
				<SecondaryButton />
				<SecondaryButton />
				<SecondaryButton />
			</div>
		</div>
	);
}

export default SideMenu;
