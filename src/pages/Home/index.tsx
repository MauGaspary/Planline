import { Select } from '../../components/Select';

const orgOptions = ['organizacao 1', 'organizacao 2', 'organizacao 3'];
const projOptions = ['projeto 1', 'projeto 2', 'projeto 3'];
const squadOptions = ['squad 1', 'squad 2', 'squad 3'];

function Home() {
	return (
		<>
			<div className="bg-triider-grayscale-gray4 flex h-screen justify-center items-center">
				<div className="bg-white w-[600px] h-[500px] drop-shadow-md rounded-[8px] flex flex-col p-12 gap-10 text-center">
					<p className="text-gray-700 text-3xl font-medium">
						Identifique-se para visualizar mais informações
					</p>
					<form className="flex flex-col px-20 gap-5 self-center">
						<Select placeholder="Organização" options={orgOptions}></Select>
						<Select placeholder="Projeto" options={projOptions}></Select>
						<Select placeholder="Squad" options={squadOptions}></Select>
						<button
							className="w-[359px] h-[55px] text-white bg-triider-primary-orange-dark p-2 rounded-[8px]"
							type="submit"
							value="Submit"
						>
							Confirmar
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Home;
