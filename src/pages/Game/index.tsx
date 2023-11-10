import { child, off, onValue, ref, set } from 'firebase/database';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import pokerTable from '../../assets/images/poker_table.svg';
import Button from '../../components/Button';
import Carousel from '../../components/Carousel';
import Header from '../../components/Header';
import Qrcode from '../../components/Qrcode';
import ToolTip from '../../components/Tooltip';
import VoteCard from '../../components/VoteCard';
import VotingTriider from '../../components/VotingTriider';
import { useDelete } from '../../hooks/useDelete';
import { getRealtimeDatabase } from '../../services/firebase';
import { Session } from '../../services/firebaseSessions';

export default function Game() {
	const router = useNavigate();

	const [voteState, setVoteState] = useState('individual');
	const [cardSelected, setCardSelected] = useState('');

	const { session_id } = useParams();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [session, setSession] = useState<Session | null>(null);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [storieNumber, setStorieNumber] = useState({
		current: 0,
		total: 0,
	});
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

	const votes = session?.stories[session.current_story].tasks[session.current_task].votes || {};

	let min = Number.MAX_SAFE_INTEGER;
	const max = Math.max(...Object.values(votes));

	let average = 0;
	let count = 0;

	for (const vote in votes) {
		if (votes[vote] === -1) continue;
		if (votes[vote] < min) min = votes[vote];

		average += votes[vote];
		count++;
	}

	average /= count;

	let storieDificulty = 0;
	const storie = session?.stories[session.current_story];

	for (const task in storie?.tasks) {
		storieDificulty += storie.tasks[task].final_vote || 0;
	}

	useEffect(() => {
		sessionListener();
		if (session) {
			usersList = Object.entries(session?.users || {});
			ShowPlayers();
		}
	}, []);

	useEffect(() => {
		if (!session) return;

		const currentTask = session.stories[session.current_story].tasks[session.current_task];

		if (currentTask.final_vote) {
			let nextTask = getNextTask();

			let nextStory: string | undefined = session.current_story;

			if (nextTask == null) {
				nextStory = getNextStory();

				if (nextStory == null) {
					closeListener(true);
					return;
				}

				nextTask = Object.keys(session.stories[nextStory].tasks)[0];
			}

			set(refSession, {
				...session,
				current_story: nextStory,
				current_task: nextTask,
			}).then(() => {
				setVoteState('individual');
				setCardSelected('');
			});
		}
	}, [session]);

	function getNextTask() {
		if (!session) return;

		const tasks = session.stories[session.current_story].tasks;

		for (const task in tasks) {
			if (tasks[task].final_vote) continue;

			return task;
		}

		return null;
	}

	async function voteLater() {
		if (!session) return;

		const nextTask = getNextTask();

		if (nextTask) {
			await set(child(refSession, 'current_task'), nextTask);
		}
	}

	function getNextStory() {
		if (!session) return;
		const stories = session.stories;

		for (const story in stories) {
			let allVoted = true;

			for (const task in stories[story].tasks) {
				if (!stories[story].tasks[task].final_vote) {
					allVoted = false;
					break;
				}
			}

			if (allVoted) continue;

			return story;
		}
	}

	async function handleVote() {
		if (cardSelected === '' || !session) return;

		await set(
			child(
				refSession,
				`stories/${session.current_story}/tasks/${session.current_task}/final_vote`
			),

			+cardSelected
		);
	}

	const isToShow = voteState === 'conjunta';

	function ShowPlayers() {
		return (
			<>
				<div>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-36 z-10">
						<VotingTriider
							isToShow={isToShow}
							type="card"
							number={usersList.length > 0 ? votes[usersList[0][0] ?? ''] || 0 : 0}
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
							isToShow={isToShow}
							type="card"
							number={usersList.length > 1 ? votes[usersList[1][0] ?? ''] || 0 : 0}
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
							isToShow={isToShow}
							type="card"
							number={usersList.length > 2 ? votes[usersList[2][0] ?? ''] || 0 : 0}
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
							isToShow={isToShow}
							type="card"
							number={usersList.length > 3 ? votes[usersList[3][0] ?? ''] || 0 : 0}
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
							isToShow={isToShow}
							type="card"
							number={usersList.length > 4 ? votes[usersList[4][0] ?? ''] || 0 : 0}
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
							isToShow={isToShow}
							type="card"
							number={usersList.length > 5 ? votes[usersList[5][0] ?? ''] || 0 : 0}
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
							isToShow={isToShow}
							type="card"
							number={usersList.length > 6 ? votes[usersList[6][0] ?? ''] || 0 : 0}
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
							isToShow={isToShow}
							type="card"
							number={usersList.length > 7 ? votes[usersList[7][0] ?? ''] || 0 : 0}
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
							isToShow={isToShow}
							type="card"
							number={usersList.length > 8 ? votes[usersList[8][0] ?? ''] || 0 : 0}
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
							isToShow={isToShow}
							type="card"
							number={usersList.length > 9 ? votes[usersList[9][0] ?? ''] || 0 : 0}
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
							isToShow={isToShow}
							type="card"
							number={usersList.length > 10 ? votes[usersList[10][0] ?? ''] || 0 : 0}
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
							isToShow={isToShow}
							type="card"
							number={usersList.length > 11 ? votes[usersList[11][0] ?? ''] || 0 : 0}
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

	return (
		<div className="w-screen h-screen bg-triider-grayscale-game">
			<Header onCancelPlanning={() => closeListener(false)} />
			<div className="ml-16 mt-24">
				<Qrcode link={session_id || ''} code={session_id || ''} />
			</div>
			<div className="flex-col absolute top-28 right-20">
				<div className="w-72 h-52 border-2 p-6 rounded-2xl bg-white font-medium border-transparent shadow-xl mb-20">
					<div className="font-medium text-xl">Resumo</div>
					<div className="flex flex-row justify-between mt-4">
						<div className="font-medium">Mínima</div>
						<div className="font-medium">{isToShow && min < Number.MAX_SAFE_INTEGER && min}</div>
					</div>
					<div className="flex flex-row justify-between mt-4">
						<div className="font-medium">Média</div>
						<div className="font-medium">{isToShow && !isNaN(average) && average}</div>
					</div>
					<div className="flex flex-row justify-between mt-4">
						<div className="font-medium">Máxima</div>
						<div className="font-medium">{isToShow && max > -Infinity && max}</div>
					</div>
				</div>
				<div className="flex flex-col justify-between w-72 h-52 border-2 p-6 rounded-2xl bg-triider-helper-green1 font-medium border-transparent shadow-xl mt-2">
					{session?.stories[session.current_story]?.name &&
						session?.stories[session.current_story]?.name.length > 67 ? (
						<ToolTip tooltip={session?.stories[session.current_story]?.name}>
							<div className="text-white text-xl line-clamp-3">
								{session?.stories[session.current_story]?.name}
							</div>
						</ToolTip>
					) : (
						<div className="text-white text-xl line-clamp-3">
							{session?.stories[session.current_story]?.name}
						</div>
					)}
					<div className="flex flex-row justify-end items-center gap-2">
						<div className="text-white">Pontuação atual</div>
						<div className="item-center justify-center w-fit p-4 border-2 rounded-2xl bg-triider-helper-green2 font-medium border-transparent shadow-xl">
							<div className="font-bold">{storieDificulty}</div>
						</div>
					</div>
				</div>
			</div>
			{voteState === 'individual' ? (
				<div className="justify-center">
					<div className="flex h-72 items-center justify-center w-fit m-auto relative">
						{session && <ShowPlayers />}
						<img src={pokerTable} alt="Poker table" className=" relative px-4" />

						<div className="flex flex-col absolute items-center gap-2">
							<h2 className="text-center text-2xl font-medium text-white">Votando</h2>
							<p className="text-lg text-white pb-2">Aguarde enquanto seus colegas votam</p>
							<Button
								onClickAction={() => {
									setVoteState('conjunta');
								}}
								size="small"
							>
								Mostrar Votos
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
									handleVote();
								}}
							>
								Atribuir pontuação
							</Button>
						</div>
					</div>
				</div>
			)}
			<div className="w-screen fixed left-1/2 transform -translate-x-1/2 bottom-0">
				<Carousel
					taskList={session?.stories[session.current_story].tasks || {}}
					currentTaskId={session?.current_task ?? null}
					voteLater={voteLater}
				/>
			</div>
		</div>
	);
}
