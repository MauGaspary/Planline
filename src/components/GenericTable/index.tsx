import { useState } from 'react';
import PencilIcon from '../../assets/icons/pencilIcon.svg';
import TrashIcon from '../../assets/icons/trashIcon.svg';
import GenericTableMock from '../../mocks/genericTable';

interface GenericTableProps {
	columns: string[];
}

const GenericTable = ({ columns }: GenericTableProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [data, setData] = useState(GenericTableMock);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [search, setSearch] = useState('');

	const filteredName =
		search.length > 0
			? data?.filter((item) => item.firstItem.toLowerCase().includes(search.toLowerCase()))
			: [];

	return (
		<div>
			<form>
				{/* <div className="relative">
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
						placeholder={columns[0]}
						required
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
				</div> */}
			</form>
			<div className="flex flex-col overflow-y-auto overflow-x-hidden h-60 mt-8">
				<div className="sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
						<table className="min-w-full text-left text-sm font-light">
							<thead className="font-medium">
								<tr>
									{columns.map((column, index) => (
										<th key={index} scope="col" className="px-8 py-4 text-triider-grayscale-gray1">
											{column}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{search.length > 0
									? filteredName?.map((item, index) => (
											<tr key={index}>
												<td className="whitespace-nowrap px-8 py-4 font-medium">
													{item.firstItem}
												</td>
												<td className="whitespace-nowrap px-8 py-4 font-medium">
													{item.secondItem}
												</td>
												{item?.thirdItem && (
													<td className="whitespace-nowrap px-8 py-4 font-medium">
														{item.thirdItem}
													</td>
												)}
												{item?.fourthItem && (
													<td className="whitespace-nowrap px-8 py-4 font-medium">
														{item.fourthItem}
													</td>
												)}
												<td className="whitespace-nowrap px-2 py-4 font-medium">
													<div className="flex flex-row gap-2">
														<img src={PencilIcon} />
														<img src={TrashIcon} />
													</div>
												</td>
											</tr>
									  ))
									: data?.map((item, index) => (
											<tr key={index}>
												<td className="whitespace-nowrap px-8 py-4 font-medium">
													{item.firstItem}
												</td>
												<td className="whitespace-nowrap px-8 py-4 font-medium">
													{item.secondItem}
												</td>
												{item?.thirdItem && (
													<td className="whitespace-nowrap px-8 py-4 font-medium">
														{item.thirdItem}
													</td>
												)}
												{item?.fourthItem && (
													<td className="whitespace-nowrap px-8 py-4 font-medium">
														{item.fourthItem}
													</td>
												)}
												<td className="whitespace-nowrap px-2 py-4 font-medium">
													<div className="flex flex-row gap-2">
														<button onClick={() => {}}>
															<img src={PencilIcon} />
														</button>
														<button onClick={() => {}}>
															<img src={TrashIcon} />
														</button>
													</div>
												</td>
											</tr>
									  ))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GenericTable;
