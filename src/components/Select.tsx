type Props = {
	placeholder: string;
	options: string[];
};

export const Select = (props: Props) => {
	return (
		<>
			<select
				className="w-[359px] h-[55px] bg-gray-100 pl-5 rounded-[8px] appearance-none bg-[top_1.4rem_right_1.4rem] bg-[length:0.65rem] bg-[../assets/icons/arrowIcon.svg] bg-no-repeat text-gray-700 font-medium"
				name={props.placeholder}
			>
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
