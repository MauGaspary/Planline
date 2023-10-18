import Header from '../../components/Header';
import pokerTable from '../../assets/images/poker_table.svg';
import VoteCard from '../../components/VoteCard';
import { useContext, useEffect, useState } from 'react';
import Qrcode from '../../components/Qrcode';
import { Session, createFirebaseSession } from '../../services/firebase/firebaseSessions';
import { onValue, ref } from 'firebase/database';
import { getRealtimeDatabase } from '../../services/firebase/firebase';
import Button from '../../components/Button';
import { ResumeContext } from '../../contexts/ResumeInfoContext';
import Carousel from '../../components/Carousel';

export default function Game() {
	const { fileContext } = useContext(ResumeContext);
	console.log(fileContext);
	const [voteState, setVoteState] = useState('individual');
	const [cardSelected, setCardSelected] = useState('');

	const [sessionId, setSessionId] = useState<string | null>(null);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [session, setSession] = useState<Session | null>(null);
	const database = getRealtimeDatabase();

	function createSession() {
		const sessionId = Math.floor(1000 + Math.random() * 9000).toString();

		createFirebaseSession(sessionId).then(() => {
			setSessionId(sessionId);

			onValue(ref(database, 'sessions/' + sessionId), (snapshot) => {
				setSession(snapshot.val());
			});
		});
	}

	useEffect(() => {
		createSession();
	}, []);

	return (
		<div className="w-screen h-screen  bg-white">
			<Header sprintName="ABC" />
			<div className="ml-16 mt-24">
				<Qrcode link={sessionId || ''} code={sessionId || ''} />
			</div>
			{voteState === 'individual' ? (
				<div>
					<div className="flex h-72 items-center justify-center">
						<img src={pokerTable} alt="Poker table" className=" relative px-4" />
						<div className="flex flex-col absolute items-center gap-2">
							<h2 className="text-center text-2xl font-medium text-white">Votação individual</h2>
							<p className="text-lg text-white pb-2">Aguarde enquanto seus colegas votam</p>
							<Button
								onClickAction={() => {
									setVoteState('conjunta');
								}}
								size="small"
							>
								Revelar votos
							</Button>
						</div>
					</div>
				</div>
			) : (
				<div>
					<div className="flex h-72 items-center justify-center">
						<img src={pokerTable} alt="Poker table" className=" relative px-4" />
						<div className="flex flex-col absolute items-center gap-2">
							<h2 className="text-center text-2xl font-medium text-white">Votação conjunta</h2>
							<p className="text-lg text-white pb-2">Escolha a pontuação final da tarefa</p>
							<div className="flex justify-around items-center gap-3">
								<VoteCard
									label="1"
									selected={cardSelected === '1'}
									onClick={(e) => setCardSelected(e)}
								/>
								<VoteCard
									label="2"
									selected={cardSelected === '2'}
									onClick={(e) => {
										setCardSelected(e);
									}}
								/>
								<VoteCard
									label="3"
									selected={cardSelected === '3'}
									onClick={(e) => setCardSelected(e)}
								/>
								<VoteCard
									label="5"
									selected={cardSelected === '5'}
									onClick={(e) => setCardSelected(e)}
								/>
								<VoteCard
									label="8"
									selected={cardSelected === '8'}
									onClick={(e) => setCardSelected(e)}
								/>
								<VoteCard
									label="13"
									selected={cardSelected === '13'}
									onClick={(e) => setCardSelected(e)}
								/>
							</div>
							<Button
								size="small"
								onClickAction={() => {
									setVoteState('individual');
								}}
							>
								Atribuir pontuação
							</Button>
						</div>
					</div>
				</div>
			)}
			<div className=" w-screen fixed left-1/2 transform -translate-x-1/2 bottom-0">
				<Carousel listaTasks={fileContext || []} />
			</div>
		</div>
	);
}
