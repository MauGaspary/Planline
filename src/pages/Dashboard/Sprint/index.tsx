import { useState } from 'react';
import Container from '../../../components/Container';
import SprintTable from '../../../mocks/sprintTable';

function Sprints() {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [data, setData] = useState(SprintTable);
	const [search, setSearch] = useState('');

	const filteredName =
		search.length > 0 ? data?.filter((item) => item.name.toLowerCase().includes(search)) : [];

	return (
		<Container title="sprints">
			<form>
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<svg
							className="w-4 h-4"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						type="text"
						className="block w-full p-4 pl-10 text-sm border border-triider-grayscale-gray3 rounded-lg bg-triider-grayscale-gray4 focus:outline-none focus:ring-2 focus:ring-triider-primary-orange2"
						placeholder="Nome"
						required
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
				</div>
			</form>
			<div className="flex flex-col overflow-y-auto overflow-x-hidden">
				<div className="sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<div>
							<table className="min-w-full text-left text-sm font-light">
								<thead className="font-medium">
									<tr>
										<th scope="col" className="px-8 py-4 text-triider-grayscale-gray1">
											NOME
										</th>
										<th scope="col" className="px-8 py-4 text-triider-grayscale-gray1">
											INÍCIO
										</th>
										<th scope="col" className="px-8 py-4 text-triider-grayscale-gray1">
											TÉRMINO
										</th>
										<th scope="col" className="px-8 py-4 text-triider-grayscale-gray1">
											PONTOS
										</th>
										<th scope="col" className="px-8 py-4 text-triider-grayscale-gray1">
											STATUS
										</th>
									</tr>
								</thead>
								<tbody>
									{search.length > 0
										? filteredName?.map((item) => (
												<tr key={item.id}>
													<td className="whitespace-nowrap px-8 py-4 font-medium">{item.name}</td>
													<td className="whitespace-nowrap px-8 py-4 font-medium">
														{item.startDate}
													</td>
													<td className="whitespace-nowrap px-8 py-4 font-medium">
														{item.endDate}
													</td>
													<td className="whitespace-nowrap px-8 py-4 font-medium">{item.points}</td>
													<td className="whitespace-nowrap px-8 py-4 font-medium">{item.status}</td>
												</tr>
										  ))
										: data?.map((item) => (
												<tr key={item.id}>
													<td className="whitespace-nowrap px-8 py-4 font-medium">{item.name}</td>
													<td className="whitespace-nowrap px-8 py-4 font-medium">
														{item.startDate}
													</td>
													<td className="whitespace-nowrap px-8 py-4 font-medium">
														{item.endDate}
													</td>
													<td className="whitespace-nowrap px-8 py-4 font-medium">{item.points}</td>
													<td className="whitespace-nowrap px-8 py-4 font-medium">{item.status}</td>
												</tr>
										  ))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default Sprints;
