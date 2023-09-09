import Button from '../../components/Button';
import { FileInput } from '../../components/FileInput/FileInput';

function Input() {
	const onSubmit = () => {};

	return (
		<div className=" flex h-screen justify-center items-center">
			<div className="bg-white w-[600px] h-[500px] rounded-[8px]  flex justify-center items-center flex-col p-12 gap-10">
				<h1 className="text-gray-700 text-3xl font-medium">Importe o arquivo</h1>
				<form onSubmit={onSubmit} className="flex justify-center items-center">
					<FileInput />
				</form>
				<Button title="Importar" />
			</div>
		</div>
	);
}

export default Input;
