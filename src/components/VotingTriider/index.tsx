import cardVote from '../../assets/images/cardVote.svg';
import coffeeVote from '../../assets/images/coffeeVote.svg';
import noVote from '../../assets/images/noVote.svg';

interface VotingTriiderProps {
	type?: string;
	number?: number;
	name?: string;
	isToShow: boolean;
	position?: string;
}

function VotingTriider({ number, name, isToShow, position }: VotingTriiderProps) {
	let image = noVote;
	const voteClass =
		position == 'top'
			? 'text-black self-start font-bold text-l rotate-[33deg] absolute right-[33px] top-[103px]'
			: 'text-black self-start font-bold text-l rotate-[33deg] absolute right-[33px] top-[75px]';

	if ((number ?? 0) === 0) {
		image = noVote;
	} else if (number === -1 && isToShow) {
		image = coffeeVote;
	} else {
		image = cardVote;
	}

	if (name) {
		return (
			<div className="w-40 h-36 flex mt-10 flex-col">
				{position == 'top' && <p className="text-black font-bold text-xl self-center">{name}</p>}
				<img src={image} className="w-32 h-24 self-center" />
				<p className={voteClass}>{(number ?? 0) > 0 && isToShow ? number : ''}</p>
				{position == 'bottom' && <p className="text-black font-bold text-xl self-center">{name}</p>}
			</div>
		);
	} else {
		return <></>;
	}
}

export default VotingTriider;
