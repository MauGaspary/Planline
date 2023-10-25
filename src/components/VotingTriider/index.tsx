import cardVote from '../../assets/images/cardVote.svg';
import coffeeVote from '../../assets/images/coffeeVote.svg';
import noVote from '../../assets/images/noVote.svg';

interface VotingTriiderProps {
	type?: string;
	number?: number;
	name?: string;
}

function VotingTriider({ type, number, name }: VotingTriiderProps) {
	let image = noVote;

	if (type === 'card') {
		image = cardVote;
	} else if (type === 'coffee') {
		image = coffeeVote;
	}

	if (name) {
		return (
			<div className="w-40 h-36 flex mt-10 flex-col">
				<p className="text-black font-bold text-xl self-center">{name}</p>
				<p className="text-black self-start font-bold text-2xl absolute pl-4 pt-9">{number}</p>
				<img src={image} className="w-32 h-24 self-center" />
			</div>
		);
	} else {
		return <></>;
	}
}

export default VotingTriider;
