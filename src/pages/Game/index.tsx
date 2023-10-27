import Header from '../../components/Header';
import pokerTable from '../../assets/images/poker_table.svg';
import VoteCard from '../../components/VoteCard';
import { useEffect, useState } from 'react';
import Qrcode from '../../components/Qrcode';
import { off, onValue, ref } from 'firebase/database';
import Button from '../../components/Button';
import Carousel from '../../components/Carousel';
import VotingTriider from '../../components/VotingTriider';
import { useNavigate, useParams } from 'react-router-dom';
import { getRealtimeDatabase } from '../../services/firebase';
import { Session } from '../../services/firebaseSessions';
import { useDelete } from '../../hooks/useDelete';

export default function Game() {
	const router = useNavigate();

	const [voteState, setVoteState] = useState('individual');
	const [cardSelected, setCardSelected] = useState('');

	const { session_id } = useParams();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [session, setSession] = useState<Session | null>(null);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const database = getRealtimeDatabase();

	const { request } = useDelete<void>();

	const refSession = ref(database, 'sessions/' + session_id);

	function sessionListener() {
		onValue(refSession, (snapshot) => {
			const session = snapshot.val();
			setSession(session);
		});
	}

	async function closeListener(save: boolean) {
		await request(`/sessions/finalize/${session_id}?save=${save}`);
		off(refSession);
		router('/');
	}

	let usersList = Object.entries(session?.users || {});
	console.log(usersList, 'usersList');

	useEffect(() => {
		sessionListener();
		if (session) {
			usersList = Object.entries(session?.users || {});
			ShowPlayers();
		}
	}, []);

	function ShowPlayers() {
		return (
			<>
				<div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-36 z-10">
						<VotingTriider
							type="card"
							number={1}
							name={
								usersList.length > 0
									? usersList[0][1].firebase_auth_id
										? usersList[0][1]?.name
										: ''
									: ''
							}
						/>
					</div>
					<div className="absolute -bottom-40 left-32 z-10">
						<VotingTriider
							type="card"
							number={2}
							name={
								usersList.length > 1
									? usersList[1][1].firebase_auth_id
										? usersList[1][1]?.name
										: ''
									: ''
							}
						/>
					</div>
					<div className="absolute -bottom-28 -left-10 z-10">
						<VotingTriider
							type="card"
							number={3}
							name={
								usersList.length > 2
									? usersList[2][1].firebase_auth_id
										? usersList[2][1]?.name
										: ''
									: ''
							}
						/>
					</div>
					<div className="absolute top-1/2 pb-10 -left-36 transform -translate-y-1/2 z-10">
						<VotingTriider
							type="card"
							number={4}
							name={
								usersList.length > 3
									? usersList[3][1].firebase_auth_id
										? usersList[3][1]?.name
										: ''
									: ''
							}
						/>
					</div>
					<div className="absolute -top-36 -left-10 z-10">
						<VotingTriider
							type="card"
							number={5}
							name={
								usersList.length > 4
									? usersList[4][1].firebase_auth_id
										? usersList[4][1]?.name
										: ''
									: ''
							}
						/>
					</div>
					<div className="absolute -top-48 left-32 z-10">
						<VotingTriider
							type="card"
							number={6}
							name={
								usersList.length > 5
									? usersList[5][1].firebase_auth_id
										? usersList[5][1]?.name
										: ''
									: ''
							}
						/>
					</div>
					<div className="absolute -top-48 left-1/2 transform -translate-x-1/2 z-10">
						<VotingTriider
							type="card"
							number={7}
							name={
								usersList.length > 6
									? usersList[6][1].firebase_auth_id
										? usersList[6][1]?.name
										: ''
									: ''
							}
						/>
					</div>
					<div className="absolute -top-48 right-32 z-10">
						<VotingTriider
							type="card"
							number={8}
							name={
								usersList.length > 7
									? usersList[7][1].firebase_auth_id
										? usersList[7][1]?.name
										: ''
									: ''
							}
						/>
					</div>
					<div className="absolute -top-36 -right-10 z-10">
						<VotingTriider
							type="card"
							number={9}
							name={
								usersList.length > 8
									? usersList[8][1].firebase_auth_id
										? usersList[8][1]?.name
										: ''
									: ''
							}
						/>
					</div>
					<div className="absolute top-1/2 pb-10 -right-36 transform -translate-y-1/2 z-10">
						<VotingTriider
							type="card"
							number={10}
							name={
								usersList.length > 9
									? usersList[9][1].firebase_auth_id
										? usersList[9][1]?.name
										: ''
									: ''
							}
						/>
					</div>
					<div className="absolute -bottom-28 -right-10 z-10">
						<VotingTriider
							type="card"
							number={11}
							name={
								usersList.length > 10
									? usersList[10][1].firebase_auth_id
										? usersList[10][1]?.name
										: ''
									: ''
							}
						/>
					</div>
					<div className="absolute -bottom-40 right-32 z-10">
						<VotingTriider
							type="card"
							number={12}
							name={
								usersList.length > 11
									? usersList[11][1].firebase_auth_id
										? usersList[11][1]?.name
										: ''
									: ''
							}
						/>
					</div>
				</div>
			</>
		);
	}

	console.log(session, 'session');

	return (
		<div className="w-screen h-screen  bg-white">
			<Header sprintName="ABC" onCancelPlanning={() => closeListener(false)} />
			<div className="ml-16 mt-24">
				<Qrcode link={session_id || ''} code={session_id || ''} />
			</div>
			{voteState === 'individual' ? (
				<div className="justify-center">
					<div className="flex h-72 items-center justify-center w-fit m-auto relative">
						{session && <ShowPlayers />}
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
					<div className="flex h-72 items-center justify-center w-fit m-auto relative">
						{session && <ShowPlayers />}
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
				<Carousel
					taskList={session?.stories[session.current_story].tasks || {}}
					currentTaskId={session?.current_task ?? null}
				/>
			</div>
		</div>
	);
}
