import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { FileInput } from '../../components/FileInput/FileInput';

function Input() {
	const onSubmit = () => {};
	return (
		<Card title="Importe o arquivo" small>
			<div className="flex justify-center">
				<form
					onSubmit={onSubmit}
					className="flex border-dashed border-triider-primary-orange-dark border-2 w-96 h-60 justify-center"
				>
					<div className="w-[352px] h-[230px] rounded-[8px]">
						<FileInput />
					</div>
				</form>
			</div>
			<div className="flex justify-center gap-8 px-[4.5rem] ">
				<Link to="/">
					<Button xs secondary>
						Voltar
					</Button>
				</Link>
				<Link to="/resume">
					<Button xs>Importar</Button>
				</Link>
			</div>
		</Card>
	);
}

export default Input;
