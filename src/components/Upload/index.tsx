import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../Container';
import { FileInput } from '../FileInput';
import { UsInfo } from '../../types/UsInfo';
import Breadcrumb from '../Breadcrumb';

interface InputProps {
	importer: (e: UsInfo[], fileName: string) => void;
}

function Upload({ importer }: InputProps) {
	const [buttonState, setButtonState] = useState<boolean>(true);
	const [file, setFile] = useState<UsInfo[] | null>(null);
	const [fileName, setFileName] = useState<string>('');

	const handleButton = (files: UsInfo[] | null, fileName: string) => {
		setButtonState(!buttonState);
		setFile(files);
		setFileName(fileName);
	};

	const onSubmit = () => {
		if (file) {
			importer(file, fileName);
		}
	};

	const items = [
		{ label: 'Identificação', link: '/' },
		{ label: 'Importação', link: '/import' },
		{ label: 'Resumo', link: '/resume' },
	];

	return (
		<Container title="Importe o arquivo" small>
			{/* <Breadcrumb items={items} /> */}
			<div className="flex justify-center">
				<div className="flex border-dashed border-triider-primary-orange-dark rounded-lg border-2 w-96 h-60 justify-center">
					<div className="w-96 h-56 rounded-lg flex justify-center">
						<FileInput buttonState={handleButton} />
					</div>
				</div>
			</div>
			<div className="flex justify-center gap-8 px-16">
				<Link to="/">
					<Button size="small" variant="secondary">
						Voltar
					</Button>
				</Link>
				<Button
					onClickAction={onSubmit}
					variant={buttonState ? 'disabled' : 'primary'}
					size="small"
				>
					Importar
				</Button>
			</div>
		</Container>
	);
}

export default Upload;
