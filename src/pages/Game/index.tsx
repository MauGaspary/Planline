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
							<div className="w-96 flex justify-around items-center">
								<VoteCard label="1" isSelect={false} onClick={() => {}} />
								<VoteCard label="2" isSelect={false} onClick={() => {}} />
								<VoteCard label="3" isSelect={false} onClick={() => {}} />
								<VoteCard label="5" isSelect={false} onClick={() => {}} />
								<VoteCard label="8" isSelect={false} onClick={() => {}} />
								<VoteCard label="13" isSelect={false} onClick={() => {}} />
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

				// <div>
				// 	<div className="h-36"></div>
				// 	<div className="flex items-center flex-col mt-32">
				// 		<div className="flex z-10 flex-col items-center mt-14 p-2">
				// 			<h2 className="text-2xl font-medium text-white">Votação conjunta</h2>
				// 			<p className="text-white">Escolha a pontuação final da tarefa</p>
				// 		</div>
				// 		<div className="w-[430px] flex justify-around items-center">
				// 			<VoteCard label="1" isSelect={false} onClick={() => {}} />
				// 			<VoteCard label="2" isSelect={false} onClick={() => {}} />
				// 			<VoteCard label="3" isSelect={false} onClick={() => {}} />
				// 			<VoteCard label="5" isSelect={false} onClick={() => {}} />
				// 			<VoteCard label="8" isSelect={false} onClick={() => {}} />
				// 			<VoteCard label="13" isSelect={false} onClick={() => {}} />
				// 		</div>
				// 		<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				// 			{/* <Table width="550" /> */}
				// 			<img src={pokerTable} alt="Poker table" className=" relative px-4" />
				// 		</div>
				// 		<div className="p-3 z-10">
				// 			{/* <button className="bg-triider-primary-orange2 rounded-lg text-white font-bold py-1 px-6 font-semibold"
				// 			type="button"

				// 			onClick={() => {
				// 				setVoteState('individual');
				// 			}}
				// 			>
				// 				Abrir Pontuação
				// 			</button> */}
				// 			<button
				// 				type="button"
				// 				className="text-triider-grayscale-white bg-triider-primary-orange1 focus:ring-0 focus:outline-none rounded-lg text-md px-8 py-1 pb-2"
				// 				onClick={() => {
				// 					setVoteState('individual');
				// 				}}
				// 			>
				// 				Abrir Pontuação
				// 			</button>
				// 		</div>
				// 	</div>
				// </div>
			)}
		</div>
	);
}
