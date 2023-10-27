import { useEffect, useState } from 'react';

interface VoteCardProps {
	label: string;
	selected?: boolean;
	onClick?: (label: string) => void;
}

export default function VoteCard({ label, selected, onClick }: VoteCardProps) {
	const [cardState, setCardState] = useState(Boolean(selected));
	let style = '';
	let textStyle = '';

	const handlePress = () => {
		if (onClick !== undefined) {
			return onClick(label);
		} else {
			setCardState(!cardState);
		}
	};

	useEffect(() => {
		setCardState(Boolean(selected));
	}, [selected]);

	cardState
		? ((style =
			'rounded-lg h-[100px] w-20 items-center justify-center bg-triider-primary-orange1 shadow shadow-gray-400 z-10'),
			(textStyle = 'text-2xl text-white font-medium'))
		: ((style =
			'rounded-lg h-[100px] w-20 items-center justify-center bg-white shadow shadow-gray-400 z-10 hover:bg-triider-grayscale-gray4'),
			(textStyle = 'text-2xl text-triider-primary-orange1 font-medium'));

	return (
		<button className={style} onClick={handlePress}>
			<p className={textStyle}>{label}</p>
		</button>
	);
}
