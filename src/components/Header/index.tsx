import { useContext } from 'react';
import logo from '../../assets/triiderLogos/logoWhite.svg';
import Button from '../Button';
import { ResumeContext } from '../../contexts/ResumeInfoContext';

interface HeaderProps {
	onCancelPlanning?: () => void;
}

export default function Header({ onCancelPlanning }: HeaderProps) {
	const { squad, sprint } = useContext(ResumeContext);

	return (
		<div>
			<header className="w-full h-16 grid grid-cols-3 bg-triider-primary-orange2">
				<div className="text-white text-xl flex flex-row justify-start items-center ml-6">
					<img className="w-12 h-12" src={logo}></img>
					<p className="ml-4 self-center">Squad {squad}</p>
				</div>
				{sprint && (
					<div className="text-white text-xl flex items-center justify-center">
						Votação da sprint {sprint}
					</div>
				)}
				<div className="flex flex-row justify-end items-center gap-2 mr-6">
					<Button size="small" variant="ghost" onClickAction={onCancelPlanning}>
						Cancelar Votação
					</Button>
				</div>
			</header>
		</div>
	);
}
