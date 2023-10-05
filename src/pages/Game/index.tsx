import Header from '../../components/Header';
import pokerTable from '../../assets/images/poker_table.svg';

export default function Game() {
	return (
		<div className="w-screen h-screen bg-white">
			<Header squadName="Looney Tunes" sprintName="ABC" />
			<div>
				<div className="py-8 pl-9">
					<h2 className="text-2xl font-medium">Votação individual</h2>
					<p>Aguarde enquanto seus colegas votam</p>
				</div>
				<div className="flex items-center justify-center">
					<img src={pokerTable} alt="Poker table" className="h-72 px-4" />
				</div>
			</div>
		</div>
	);
}
