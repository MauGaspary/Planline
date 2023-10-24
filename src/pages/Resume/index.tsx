import { useContext, useState } from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Upload from '../../components/Upload';
import { UsInfo } from '../../types/UsInfo';
import { ResumeContext } from '../../contexts/ResumeInfoContext';

function Resume() {
	const [upload, setUpload] = useState<boolean | null>(false);
	const [file, setFile] = useState<UsInfo[] | null>(null);
	const { setFileContext, organization, project, squad, sprint } = useContext(ResumeContext);
	const [fileName, setFileName] = useState<string>('');

	// TODO: use this hook to do the request
	// const { data, error, isLoading, request } = usePost<
	// 	 SessionCreationResponseDto,
	// 	 SessionCreationDto
	// >();

	function createSession() {
		// TODO: do the request
		// request('/sessions', dto);
	}

	function importFile(file: UsInfo[], fileName: string) {
		setFile(file);
		setFileContext(file);
		setUpload(true);
		setFileName(fileName);
	}

	return (
		<>
			{upload ? (
				<Container title="resumo">
					<div className="grid grid-cols-3 gap-4">
						<div className="flex gap-2 ">
							<span className="text-triider-grayscale-gray1">ORGANIZAÇÃO:</span>
							<span className="font-bold">{organization}</span>
						</div>
						<div className="flex gap-2">
							<span className="text-triider-grayscale-gray1">SQUAD:</span>
							<span className="font-bold">{squad}</span>
						</div>
						<div className="flex gap-2 row-span-2 break-all">
							<span className="text-triider-grayscale-gray1 whitespace-nowrap">ARQUIVO:</span>
							<span className="font-bold">{fileName}</span>
						</div>
						<div className="flex gap-2">
							<span className="text-triider-grayscale-gray1">PROJETO:</span>
							<span className="font-bold">{project}</span>
						</div>
						<div className="flex gap-2">
							<span className="text-triider-grayscale-gray1">SPRINT:</span>
							<span className="font-bold">{sprint}</span>
						</div>
					</div>
					<div className="overflow-y-scroll h-60 overflow-x-hidden mt-2 relative">
						{file?.map((item, idx) => (
							<div key={idx} className="mb-4">
								<div className="grid grid-cols-1 place-items-start overflow-hidden">
									<label
										className="cursor-pointer z-10 w-full grow pl-4 pr-12 py-3 text-triider-grayscale-gray1"
										htmlFor={item.us.id}
									>
										{item.us.name}
									</label>
									<input
										className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border opacity-0 hidden"
										type="checkbox"
										name={item.us.name}
										id={item.us.id}
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
											<p key={task.id} className="flex ml-8">
												{task.name}
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
						<Button variant="primary" onClickAction={createSession}>
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
