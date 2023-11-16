import cardVote from '../../assets/images/cardVote.svg';
import coffeeVote from '../../assets/images/coffeeVote.svg';
import noVote from '../../assets/images/noVote.svg';

interface VotingTriiderProps {
	type?: string;
	number?: number;
	name?: string;
	isToShow: boolean;
}

function VotingTriider({ number, name, isToShow }: VotingTriiderProps) {
	let image = noVote;

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
				<p className="text-black font-bold text-xl self-center">{name}</p>
				<p className="text-black self-start font-bold text-2xl absolute pl-4 pt-9">
					{(number ?? 0) > 0 && isToShow ? number : ''}
				</p>
				<img src={image} className="w-32 h-24 self-center" />
			</div>
		);
	} else {
		return <></>;
	}
}

export default VotingTriider;
