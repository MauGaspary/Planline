import ArrowIcon from '../../assets/icons/arrowIcon.svg';

interface SelectProps {
	placeholder: string;
	options: string[];
	handleSelect: (placeholder: string, option: string) => void;
	disabled?: boolean;
	isOpen: boolean;
	onToggle: () => void;
}

export const Select = (props: SelectProps) => {
	const buttonClass = props.disabled
		? 'flex cursor-default items-center text-lg w-[359px] h-[55px] bg-gray-100 pl-5 rounded-[8px] text-gray-700 font-medium opacity-30'
		: 'flex cursor-pointer items-center text-lg w-[359px] h-[55px] bg-gray-100 pl-5 rounded-[8px] text-gray-700 font-medium hover:bg-slate-200';

	return (
		<div className="relative">
			<div
				onClick={() => {
					if (props.disabled) return;
					props.onToggle();
				}}
				className={buttonClass}
			>
				<p>{props.placeholder}</p>
				<img src={ArrowIcon} alt="arrow" className="absolute right-3 top-4" />
			</div>

			{props.isOpen && (
				<ul className="absolute max-h-40 overflow-auto text-start z-10 items-center text-lg w-[359px] bg-gray-200 rounded-[8px] text-gray-700 font-medium">
					{props.options.map((option) => (
						<li
							onClick={() => {
								props.onToggle();
								props.handleSelect(props.placeholder, option);
							}}
							className="p-4 cursor-pointer hover:bg-slate-300"
							key={option}
							value={option}
						>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
