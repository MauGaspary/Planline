import cardVote1 from '../../assets/images/cardVote1.svg';
import cardVote2 from '../../assets/images/cardVote2.svg';
import cardVote3 from '../../assets/images/cardVote3.svg';
import cardVote5 from '../../assets/images/cardVote5.svg';
import cardVote8 from '../../assets/images/cardVote8.svg';
import cardVote13 from '../../assets/images/cardVote13.svg';
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
		switch (number) {
			case 1:
				image = cardVote1;
				break;
			case 2:
				image = cardVote2;
				break;
			case 3:
				image = cardVote3;
				break;
			case 5:
				image = cardVote5;
				break;
			case 8:
				image = cardVote8;
				break;
			case 13:
				image = cardVote13;
				break;
			default:
				image = noVote;
				break;
		}
	}

	if (name) {
		return (
			<div className="w-40 h-36 flex mt-10 flex-col">
				{position == 'top' && <p className="text-black font-bold text-xl self-center">{name}</p>}
				<img src={image} className="w-32 h-24 self-center" />
				{position == 'bottom' && <p className="text-black font-bold text-xl self-center">{name}</p>}
			</div>
		);
	} else {
		return <></>;
	}
}

export default VotingTriider;
