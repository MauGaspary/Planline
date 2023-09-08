import Button from '../../components/Button';
import { SelectInput } from '../../components/SelectInput';

const orgOptions = ['organizacao 1', 'organizacao 2', 'organizacao 3'];
const projOptions = ['projeto 1', 'projeto 2', 'projeto 3'];
const squadOptions = ['squad 1', 'squad 2', 'squad 3'];

function Select() {
	return (
		<>
			<div className="bg-triider-grayscale-gray4 flex h-screen justify-center items-center">
				<div className="bg-white w-[600px] h-[500px] drop-shadow-md rounded-[8px] flex flex-col p-12 gap-10 text-center">
					<p className="text-gray-700 text-3xl font-medium">
						Identifique-se para visualizar mais informações
					</p>
					<form className="flex flex-col px-20 gap-5 self-center">
						<SelectInput placeholder="Organização" options={orgOptions}></SelectInput>
						<SelectInput placeholder="Projeto" options={projOptions}></SelectInput>
						<SelectInput placeholder="Squad" options={squadOptions}></SelectInput>
						<Button title="Confirmar" />
					</form>
				</div>
			</div>
		</>
	);
}
export default Select;
