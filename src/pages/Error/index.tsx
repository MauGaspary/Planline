import { Link } from 'react-router-dom';
import SadTriider from '../../assets/images/sadOrangeTriider.png';

function Error() {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<img src={SadTriider} alt="404" className="w-48" />
			<div className="text-black text-6xl">404</div>
			<div className="text-black text-2xl">A página que você está procurando não existe</div>
			<Link to="/" className="no-underline mt-4">
				<button className="text-triider-primary-orange-dark text-2xl">
					Voltar para a tela principal
				</button>
			</Link>
		</div>
	);
}

export default Error;
