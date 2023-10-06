import { useContext, useState } from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Upload from '../../components/Upload';
import { usInfo } from '../../types/usInfo';
import { ResumeContext } from '../../contexts/ResumeInfoContext';
import { useNavigate } from 'react-router-dom';

function Resume() {
	const router = useNavigate();
	const [upload, setUpload] = useState<boolean | null>(false);
	const [file, setFile] = useState<usInfo[] | null>(null);
	const { setFileContext } = useContext(ResumeContext);

	function importFile(file: usInfo[]) {
		setFile(file);
		setFileContext(file);
		setUpload(true);
	}

	return (
		<>
			{upload ? (
				<Container title="resumo">
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
							<span className="font-bold">Squad_Turma_do_Bairro.csv</span>
						</div>
						<div className="flex gap-2">
							<span className="text-triider-grayscale-gray1">PROJETO:</span>
							<span className="font-bold">PlanLine</span>
						</div>
						<div className="flex gap-2">
							<span className="text-triider-grayscale-gray1">SPRINT:</span>
							<span className="font-bold">22</span>
						</div>
					</div>
					<div className="overflow-y-scroll h-60 overflow-x-hidden mt-2 relative">
						{file?.map((item, idx) => (
							<div key={idx} className="mb-4">
								<div className="grid grid-cols-1 place-items-start overflow-hidden">
									<label
										className="cursor-pointer z-10 w-full grow pl-4 pr-12 py-3 text-triider-grayscale-gray1"
										htmlFor={item.us}
									>
										{item.us}
									</label>
									<input
										className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border opacity-0 hidden"
										type="checkbox"
										name={item.us}
										id={item.us}
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
										{item.tasks.map((task) => (
											<p key={task} className="flex ml-8">
												{task}
											</p>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="flex gap-32 justify-center mt-4">
						<Button variant="secondary" onClickAction={() => setUpload(false)}>
							Voltar
						</Button>
						<Button onClickAction={() => router('/game')} variant="primary">
							Iniciar sessão
						</Button>
					</div>
				</Container>
			) : (
				<Upload importer={importFile} />
			)}
		</>
	);
}

export default Resume;
