import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { ResumeContext } from '../../contexts/ResumeInfoContext';
import { useGet } from '../../hooks/useGet';
import { UsInfo } from '../../types/UsInfo';
import Breadcrumb from '../Breadcrumb';
import Container from '../Container';
import { FileInput } from '../FileInput';
import Toast from '../Toast';

interface InputProps {
	importer: (e: UsInfo[], fileName: string) => void;
	setBreadcrumbDisplay: (display: string) => void;
}

function Upload({ importer, setBreadcrumbDisplay }: InputProps) {
	const { squad_id } = useContext(ResumeContext);
	const [buttonState, setButtonState] = useState<boolean>(true);
	const [file, setFile] = useState<UsInfo[] | null>(null);
	const [fileName, setFileName] = useState<string>('');
	const { data: availableSession, request: getAvailableSession } = useGet<string[]>();

	useEffect(() => {
		// TODO:
		getAvailableSession(`/sessions/available/${squad_id}`);
	}, []);

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

	return (
		<>
			{(availableSession?.length ?? 0 > 0) && (
				<Toast sessions={availableSession ? availableSession : []} />
			)}
			<Container title="Importe o arquivo" small>
				<Breadcrumb display={'import'} />
				<div className="flex justify-center">
					<div className="flex border-dashed border-triider-primary-orange-dark rounded-lg border-2 w-96 h-60 justify-center">
						<div className="w-96 h-56 rounded-lg flex justify-center">
							<FileInput buttonState={handleButton} />
						</div>
					</div>
				</div>
				<div className="flex justify-center gap-8 px-16">
					<Link to="/">
						<Button
							onClickAction={() => setBreadcrumbDisplay('home')}
							size="small"
							variant="secondary"
						>
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
		</>
	);
}

export default Upload;
