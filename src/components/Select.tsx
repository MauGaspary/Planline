type Props = {
	placeholder: string;
	options: string[];
};

export const Select = (props: Props) => {
	return (
		<>
			<select className="w-[359px] h-[55px] bg-gray-100 p-2 rounded-[8px]" name={props.placeholder}>
				<option value="" disabled selected hidden>
					{props.placeholder}
				</option>
				{props.options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</>
	);
};
