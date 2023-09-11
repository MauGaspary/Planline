import Button from '../../components/Button';
import Card from '../../components/Card';
import { FileInput } from '../../components/FileInput/FileInput';

function Input() {
	const onSubmit = () => {};

	return (
		<Card title="Importe o arquivo" small>
			<div className=" flex flex-col px-20 gap-5 self-center">
				<form onSubmit={onSubmit} className="flex justify-center items-center">
					<FileInput />
				</form>
				<div className="flex gap-5 self-center">
					<Button title="Importar" />
				</div>
			</div>
		</Card>
	);
}

export default Input;
