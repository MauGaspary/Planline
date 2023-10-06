import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { FileInput } from '../../components/FileInput/FileInput';

function Input() {
	const [file, setFile] = useState<boolean>(true);

	const handleButton = () => {
		setFile(!file);
	};

	const onSubmit = () => {};

	return (
		<Card title="Importe o arquivo" small>
			<div className="flex justify-center">
				<form
					onSubmit={onSubmit}
					className="flex border-dashed border-triider-primary-orange-dark rounded-lg border-2 w-96 h-60 justify-center"
				>
					<div className="w-96 h-56 rounded-lg flex justify-center">
						<FileInput buttonState={handleButton} />
					</div>
				</form>
			</div>
			<div className="flex justify-center gap-8 px-16">
				<Link to="/">
					<Button size="small" secondary>
						Voltar
					</Button>
				</Link>
				<Link to="/resume">
					<Button disabled={file} size="small">
						Importar
					</Button>
				</Link>
			</div>
		</Card>
	);
}

export default Input;
