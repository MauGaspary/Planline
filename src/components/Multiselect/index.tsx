import ArrowDownIcon from '../../assets/icons/arrowDownIcon.svg';
import checkMarkIcon from '../../assets/icons/checkmark.svg';
import { InfoBody } from '../../types/InfoBody';

interface MultiselectProps {
	options: InfoBody[];
	disabled?: boolean;
	handleMultiselect: (option: InfoBody) => void;
	selected: InfoBody[];
	isOpen: boolean;
	onToggle: () => void;
}

export const Multiselect = ({
	isOpen,
	onToggle,
	options,
	disabled,
	handleMultiselect,
	selected,
}: MultiselectProps) => {
	const buttonClass = disabled
		? 'flex cursor-default items-center text-lg w-full min-h-[56px] bg-gray-100 pl-5 rounded-lg text-gray-700 font-medium opacity-30'
		: 'flex whitespace-pre overflow-hidden cursor-pointer min-h-[56px] h-auto items-center text-lg w-full bg-gray-100 pl-5 rounded-lg text-gray-700 font-medium hover:bg-slate-200';

	return (
		<div className="relative w-full max-w-[320px]">
			<div
				onClick={() => {
					if (disabled) return;
					onToggle();
				}}
				className={buttonClass}
			>
				{selected.length > 0 ? (
					selected.map((option, idx) => (
						<p key={option.id}>
							{idx > 0 && ', '}
							{option.name}
						</p>
					))
				) : (
					<p>Selecione</p>
				)}
				<img src={ArrowDownIcon} alt="arrow" className="absolute right-3 top-4" />
			</div>

			{isOpen && (
				<ul className="absolute max-h-40 overflow-auto text-start z-10 items-center text-lg w-full bg-gray-200 rounded-lg text-gray-700 font-medium">
					{selected.length > 0 &&
						selected.map((option) => (
							<li
								onClick={() => {
									handleMultiselect(option);
								}}
								className="p-4 flex justify-between cursor-pointer bg-slate-300"
								key={option.id}
								value={option.name}
							>
								{option.name}
								<img src={checkMarkIcon} className="w-4 h-4" />
							</li>
						))}
					{options.length > 0 ? (
						options
							.filter((option) => !selected.includes(option))
							.map((option) => (
								<li
									onClick={() => {
										handleMultiselect(option);
									}}
									className="p-4 cursor-pointer hover:bg-slate-300"
									key={option.id}
									value={option.name}
								>
									{option.name}
								</li>
							))
					) : (
						<li className="p-4 cursor-pointer hover:bg-slate-300">Sem opções disponíveis</li>
					)}
				</ul>
			)}
		</div>
	);
};
