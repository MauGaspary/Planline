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

	if ((number ?? 0) === 0) {
		image = noVote;
	} else if (number === -1 && isToShow) {
		image = coffeeVote;
	} else {
		image = cardVote;
	}

	if (name) {
		return (
			<div
				className={`w-40 h-36 flex mt-10 flex-col absolute ${
					position === 'top' ? 'top-0' : 'bottom-0'
				}`}
			>
				<p className="text-black font-bold text-xl self-center">{name}</p>
				<p
					className={`text-black ${
						position === 'top' ? 'absolute top-9' : 'absolute bottom-9'
					} left-4 font-bold text-2xl`}
				>
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
