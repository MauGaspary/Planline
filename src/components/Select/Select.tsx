import ArrowIcon from '../../assets/icons/arrowIcon.svg';
import { InfoBody } from '../../types/InfoBody';

interface SelectProps {
	placeholder: string;
	options: InfoBody[];
	handleSelect: (placeholder: string, option: InfoBody) => void;
	disabled?: boolean;
	isOpen: boolean;
	onToggle: () => void;
	width?: string;
}

export const Select = (props: SelectProps) => {
	const widthClass = props.width === undefined ? 'w-80' : `w-${props.width}`;
	const buttonClass =
		(props.disabled
			? 'flex cursor-default items-center text-lg h-14 bg-gray-100 pl-5 rounded-lg text-gray-700 font-medium opacity-30 ' +
			  widthClass
			: 'flex cursor-pointer items-center text-lg h-14 bg-gray-100 pl-5 rounded-lg text-gray-700 font-medium hover:bg-slate-200 ') +
		widthClass;

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
				<ul
					className={
						'absolute max-h-40 overflow-auto text-start z-10 items-center text-lg bg-gray-200 rounded-lg text-gray-700 font-medium ' +
						widthClass
					}
				>
					{props.options.length > 0 ? (
						props.options.map((option) => (
							<li
								onClick={() => {
									props.onToggle();
									props.handleSelect(props.placeholder, option);
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
