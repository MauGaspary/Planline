import Header from '../../components/Header';
import pokerTable from '../../assets/images/poker_table.svg';
import VoteCard from '../../components/VoteCard';
import { useState } from 'react';

export default function Game() {
	const [voteState, setVoteState] = useState('individual');

	return (
		<div className="w-screen h-screen bg-white">
			<Header squadName="Looney Tunes" sprintName="ABC" />
			{voteState === 'individual' ? (
				<div>
					<div className="h-36"></div>
					<div className="flex h-72 items-center justify-center">
						<img src={pokerTable} alt="Poker table" className=" relative px-4" />
						<div className="flex flex-col absolute items-center gap-2">
							<h2 className="text-center text-2xl font-medium text-white">Votação individual</h2>
							<p className="text-lg text-white pb-2">Aguarde enquanto seus colegas votam</p>
							<button
								type="button"
								className="text-triider-grayscale-white bg-triider-primary-orange1 focus:ring-0 focus:outline-none rounded-lg text-md px-8 py-1 pb-2"
								onClick={() => {
									setVoteState('conjunta');
								}}
							>
								Revelar votos
							</button>
						</div>
					</div>
				</div>
			) : (
				<div>
					<div className="h-36"></div>
					<div className="flex h-72 items-center justify-center">
						<img src={pokerTable} alt="Poker table" className=" relative px-4" />
						<div className="flex flex-col absolute items-center gap-2">
							<h2 className="text-center text-2xl font-medium text-white">Votação conjunta</h2>
							<p className="text-lg text-white pb-2">Escolha a pontuação final da tarefa</p>
							<div className="flex justify-around items-center gap-3">
								<VoteCard label="1" isSelect={true} />
								<VoteCard label="2" isSelect={false} />
								<VoteCard label="3" isSelect={false} />
								<VoteCard label="5" isSelect={false} />
								<VoteCard label="8" isSelect={false} />
								<VoteCard label="13" isSelect={false} />
							</div>
							<button
								type="button"
								className="text-triider-grayscale-white bg-triider-primary-orange1 focus:ring-0 focus:outline-none rounded-lg text-md px-8 py-1 pb-2"
								onClick={() => {
									setVoteState('individual');
								}}
							>
								Abrir pontuação
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
