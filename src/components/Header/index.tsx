import logo from '../../assets/images/Simbolo Triider branco.png';
import Button from '../Button';

interface HeaderProps {
	squadName: string;
	sprintName: string;
}

export default function Header({ squadName, sprintName }: HeaderProps) {
	return (
		<div>
			<header className="w-full h-16 grid grid-cols-3 bg-triider-primary-orange2">
				<div className="text-white text-xl flex flex-row justify-start items-center ml-6">
					<img className="w-12 h-12" src={logo}></img>
					<p className="ml-4 self-center">{squadName}</p>
				</div>
				<div className="text-white text-xl flex items-center justify-center">
					Votação da sprint {sprintName}
				</div>
				<div className="flex flex-row justify-end items-center gap-2 mr-6">
					<Button size="small" variant="ghost">
						Reiniciar Votação
					</Button>
					<Button size="small" variant="ghost">
						Cancelar Votação
					</Button>
				</div>
			</header>
		</div>
	);
}
