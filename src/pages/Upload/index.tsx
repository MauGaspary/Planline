import Button from '../../components/Button';
import Card from '../../components/Card';
import { FileInput } from '../../components/FileInput/FileInput';

function Input() {
	const onSubmit = () => {};
	return (
		<Card title="Importe o arquivo" small>
			<form onSubmit={onSubmit} className="flex justify-center">
				<div className="w-[352px] h-[230px] rounded-[8px]">
					<FileInput />
				</div>
			</form>
			<div className="flex gap-8 px-[4.5rem] ">
				<Button secondary>Voltar</Button>
				<Button>Importar</Button>
			</div>
		</Card>
	);
}

export default Input;
