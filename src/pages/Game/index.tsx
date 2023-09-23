import Table from '../../components/Table';

export default function Game() {
	return (
		<div className="w-screen h-screen bg-white">
			{/* @Chanan, deixei aqui só pra ir fazendo o layout considerando q vai te um bgl de navbar */}
			{/* @Chanan, só tirar dps */}
			<nav className="bg-triider-primary-orange2 w-screen h-16"></nav>
			<div>
				<div className="py-8 pl-9">
					<h2 className="text-2xl font-medium">Votação individual</h2>
					<p>Aguarda enquanto os participantes votam</p>
				</div>
				<div className="flex items-center justify-center">
					<Table width="500" />
				</div>
			</div>
		</div>
	);
}
