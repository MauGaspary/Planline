interface VoteCardProps {
	label: string;
	isSelect: boolean;
	onClick: (label: string) => void;
}

export default function VoteCard({ label, isSelect, onClick }: VoteCardProps) {
	let style = '';
	let textStyle = '';

	const handlePress = () => {
		onClick(label);
	};
	isSelect
		? ((style =
				'rounded-md h-20 w-14 items-center justify-center bg-triider-primary-orange1 shadow shadow-gray-400 z-10'),
		  (textStyle = 'text-lg text-white font-bold'))
		: ((style =
				'rounded-md h-20 w-14 items-center justify-center bg-white shadow shadow-gray-400 z-10'),
		  (textStyle = 'text-lg text-triider-primary-orange1 font-bold'));

	return (
		<button className={style} onClick={handlePress}>
			<p className={textStyle}>{label}</p>
		</button>
	);
}
