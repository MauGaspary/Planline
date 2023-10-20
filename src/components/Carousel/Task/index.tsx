interface TaskProps {
	title: string;
	voted?: boolean;
	next?: boolean;
	finalVote: number;
}

function Task({ title, voted, next, finalVote }: TaskProps) {
	const propsNext = next
		? 'w-80 mx-auto h-48 rounded-xl border-4 border-r-4 border-triider-primary-orange2 bg-white items-start flex flex-col justify-between pt-3 pl-5 pb-3 pr-5'
		: 'w-80 mx-auto h-48 rounded-xl border-4 border-triider-primary-orange2 bg-white items-start flex flex-col justify-between pt-3 pl-5 pb-3 pr-5 mb-5';

	return (
		<>
			{voted ? (
				<div className="mx-auto w-80 h-48 rounded-xl border-4 border-triider-primary-orange2 bg-triider-primary-orange2 items-start flex flex-col justify-between pt-3 pl-5 pb-3 pr-5">
					<p className="text-black text-lg text-left font-bold">{title}</p>
					<div className="justify-end flex w-full flex-row">
						<p className="text-white self-center text-sm mr-2">Pontuação final</p>
						<button className="text-white text-lg font-bold bg-triider-primary-orange-dark rounded-xl w-16 h-16 ">
							{finalVote}
						</button>
					</div>
				</div>
			) : (
				<div className={propsNext}>
					<p className="text-black text-lg text-left font-bold">{title}</p>
					<div className="justify-end flex w-full flex-row max-w-full space-x-24">
						{next ? (
							<></>
						) : (
							<button className="text-white text-sm bg-triider-secondary-purple3 rounded-xl w-28 h-10 self-end ">
								Votar depois
							</button>
						)}

						<button className="text-white text-lg bg-triider-grayscale-gray1 rounded-xl w-16 h-16 self-end">
							...
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default Task;
