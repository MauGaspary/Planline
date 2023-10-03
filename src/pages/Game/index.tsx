import Table from '../../components/Table';
import VoteCard from '../../components/VoteCard';

export default function Game() {
	return (
		<div className="w-screen h-screen bg-white">
			<nav className="bg-triider-primary-orange2 w-screen h-16"></nav>
			<div className="">
				<div className="flex items-center flex-col mt-32">
					<div className="flex z-10 flex-col items-center mt-14 p-2">
						<h2 className="text-2xl font-medium text-white">Votação conjunta</h2>
						<p className="text-white">Escolha a pontuação final da tarefa</p>
					</div>
					<div className="w-[430px] flex justify-around items-center">
						<VoteCard label="1" isSelect={false} onClick={() => {}} />
						<VoteCard label="2" isSelect={false} onClick={() => {}} />
						<VoteCard label="3" isSelect={false} onClick={() => {}} />
						<VoteCard label="5" isSelect={false} onClick={() => {}} />
						<VoteCard label="8" isSelect={false} onClick={() => {}} />
						<VoteCard label="13" isSelect={false} onClick={() => {}} />
					</div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<Table width="550" />
					</div>
					<div className="p-3 z-10">
						<button className="bg-triider-primary-orange2 rounded-lg text-white font-bold py-1 px-6 font-semibold">
							Abrir Pontuação
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
