import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import QRCode from 'react-qr-code';
import ResumeInfo from '../../mocks/resumeInfo';
import {
	Session,
	User,
	createFirebaseSession,
	finishFirebaseSession,
} from '../../services/firebase/firebaseSessions';
import { getRealtimeDatabase } from '../../services/firebase/firebase';
import { off, onValue, ref } from 'firebase/database';

function Participant({ name, isOnline }: { name: string; isOnline: boolean }) {
	const circle = isOnline ? 'bg-triider-primary-orange-dark' : 'bg-triider-grayscale-gray1';
	const underline = isOnline ? 'underline' : 'no-underline';

	return (
		<div className="flex items-center gap-2">
			<div className={`w-2 h-2 rounded-full ${circle}`}></div>
			<span
				className={`text-triider-grayscale-gray1 ${underline} underline-offset-4 decoration-triider-primary-orange1`}
			>
				{name}
			</span>
		</div>
	);
}

function Participants({ className, participants }: { className: string; participants: User[] }) {
	return (
		<div className={`flex flex-col gap-2 ${className}`}>
			<span className="text-triider-grayscale-gray1">PARTICIPANTES:</span>
			{participants.map((participant) => (
				<Participant
					key={participant.name}
					name={participant.name}
					isOnline={participant.firebase_auth_id != null}
				/>
			))}
		</div>
	);
}

function Game({
	sessionId,
	session,
	onEndSession,
}: {
	sessionId: string;
	session: Session;
	onEndSession: () => void;
}) {
	const participants = Object.values(session.users);

	return (
		<div className="min-h-screen bg-triider-grayscale-gray4">
			<h1 className="text-5xl w-full text-center pt-5 text-triider-primary-orange-dark">
				Plaining Poker
			</h1>
			<div className="flex justify-between text-center ml-6 mr-6">
				<div className="bg-white p-5 rounded border-2 border-triider-primary-orange3">
					<Participants className="" participants={participants} />
				</div>
				<div className="bg-white p-5 rounded border-2 border-triider-primary-orange3">
					<p className="">
						<QRCode size={160} value={sessionId} />
					</p>
					<p className="font-mono text-2xl tracking-[.5em] mt-2 mr-{-.5em}">{sessionId}</p>
				</div>
			</div>
			<button
				type="submit"
				className="text-triider-grayscale-white bg-triider-alert-red focus:ring-0 focus:outline-none rounded-lg text-xl px-6 py-2 mt-3 mx-auto block absolute bottom-6 right-6"
				onClick={() => onEndSession()}
			>
				Finalizar sessão
			</button>
		</div>
	);
}

function Resume() {
	const [sessionId, setSessionId] = useState<string | null>(null);
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

	function finishSession() {
		if (sessionId == null) return;

		off(ref(database, 'sessions/' + sessionId));

		finishFirebaseSession(sessionId).then(() => {
			setSessionId(null);
			setSession(null);
		});
	}

	return (
		<>
			{session == null || sessionId == null ? (
				<Card title="resumo">
					<div className="grid grid-cols-3 gap-4">
						<div className="flex gap-2">
							<span className="text-triider-grayscale-gray1">ORGANIZAÇÃO:</span>
							<span className="font-bold">Triider</span>
						</div>
						<div className="flex gap-2">
							<span className="text-triider-grayscale-gray1">SQUAD:</span>
							<span className="font-bold">Turma do bairro</span>
						</div>
						<div className="flex gap-2">
							<span className="text-triider-grayscale-gray1">ARQUIVO:</span>
							<span className="font-bold">x.csv</span>
						</div>
						<div className="flex gap-2">
							<span className="text-triider-grayscale-gray1">PROJETO:</span>
							<span className="font-bold">Guaíba city</span>
						</div>
						<div className="flex gap-2">
							<span className="text-triider-grayscale-gray1">SPRINT:</span>
							<span className="font-bold">22</span>
						</div>
					</div>
					<div className="overflow-y-scroll h-screen overflow-x-hidden mt-2 relative">
						{ResumeInfo?.map((item) => (
							<div key={item.name} className="mb-4">
								<div className="grid grid-cols-1 place-items-start overflow-hidden">
									<label
										className="z-10 w-full grow px-4 py-3 text-triider-grayscale-gray1"
										htmlFor={item.name}
									>
										{item.name}
									</label>
									<input
										className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border opacity-0 hidden"
										type="checkbox"
										name={item.name}
										id={item.name}
									/>
									<svg
										className="absolute right-2 mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45 content-end"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
									>
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
									</svg>
									<div className="hidden scale-75 scale-y-0 px-4 py-3 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:block">
										{item.task.map((task) => (
											<p key={task.name} className="flex ml-8">
												{task.name}
											</p>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="flex gap-32 justify-center mt-auto">
						<button
							type="submit"
							className="text-triider-grayscale-black bg-triider-grayscale-gray4 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-10 py-2"
						>
							Voltar
						</button>
						<button
							type="submit"
							className="text-triider-grayscale-white bg-triider-primary-orange-dark focus:ring-0 focus:outline-none rounded-lg text-sm px-6 py-2"
							onClick={createSession}
						>
							Iniciar sessão
						</button>
					</div>
				</Card>
			) : (
				<Game sessionId={sessionId} session={session} onEndSession={finishSession} />
			)}
		</>
	);
}

export default Resume;
