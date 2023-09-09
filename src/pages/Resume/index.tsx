import { useState } from 'react';
import Card from '../../components/Card';
import QRCode from 'react-qr-code';
import ResumeInfo from '../../mocks/resumeInfo';

function Resume() {
	const [showResume, setShowResume] = useState(true);

	return (
		<Card title="resumo">
			{showResume ? (
				<>
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
							onClick={() => setShowResume(!showResume)}
						>
							Iniciar sessão
						</button>
					</div>
				</>
			) : (
				<>
					<div className="flex justify-center">
						<QRCode size={256} value={''} />
					</div>
					<button
						type="submit"
						className="text-triider-grayscale-white bg-triider-primary-orange-dark focus:ring-0 focus:outline-none rounded-lg text-sm px-6 py-2"
						onClick={() => setShowResume(!showResume)}
					>
						→
					</button>
				</>
			)}
		</Card>
	);
}

export default Resume;
