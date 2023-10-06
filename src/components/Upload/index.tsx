import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import { FileInput } from '../../components/FileInput/FileInput';
import { usInfo } from '../../types/usInfo';

interface InputProps {
	importer: (e: usInfo[]) => void;
}

function Upload({ importer }: InputProps) {
	const [buttonState, setButtonState] = useState<boolean>(true);
	const [file, setFile] = useState<usInfo[] | null>(null);

	const handleButton = (files: usInfo[] | null) => {
		setButtonState(!buttonState);
		setFile(files);
	};

	const onSubmit = () => {
		if (file) {
			importer(file);
		}
	};

	return (
		<Card title="Importe o arquivo" small>
			<div className="flex justify-center">
				<div className="flex border-dashed border-triider-primary-orange-dark rounded-lg border-2 w-96 h-60 justify-center">
					<div className="w-96 h-56 rounded-lg flex justify-center">
						<FileInput buttonState={handleButton} />
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-8 px-16">
				<Link to="/">
					<Button size="small" secondary>
						Voltar
					</Button>
				</Link>
				<Button onClickAction={onSubmit} disabled={buttonState} size="small">
					Importar
				</Button>
			</div>
		</Card>
	);
}

export default Upload;
