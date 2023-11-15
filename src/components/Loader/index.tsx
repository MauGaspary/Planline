import logoTriiderOrange from '../../assets/triiderLogos/logoOrange.svg';
import './animation.css';

export default function Loader() {
	return (
		<div className="w-screen h-screen max-w-full flex items-center justify-center flex-col">
			<img src={logoTriiderOrange} alt="Logo da empresa Triider laranja" className="h-48" />
			<div className="flex gap-2 items-center my-10">
				<h1 className="text-xl self-end font-medium">Carregando</h1>
				<div className="loading">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	);
}
