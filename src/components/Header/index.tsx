interface HeaderProps {
	squadName: string;
	sprintName: string;
}

export default function Header({ squadName, sprintName }: HeaderProps) {
	return (
		<div>
			<header className="w-full h-16 flex flex-row justify-between items-center bg-triider-primary-orange2">
				<div className="text-white text-xl">{squadName}</div>
				<div className="text-white text-xl">Votação da sprint {sprintName}</div>
				<div className="">BOTOESSSSS</div>
			</header>
		</div>
	);
}
