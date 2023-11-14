/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import PencilIcon from '../../assets/icons/pencilIcon.svg';
import TrashIcon from '../../assets/icons/trashIcon.svg';

interface GenericTableProps {
	columns: string[];
	listItems?: unknown[];
	search?: string;
	level?: string;
	onEdit?: (e: string) => void;
	onDelete?: (e: string) => void;
}

const GenericTable = ({
	columns,
	listItems,
	onDelete,
	onEdit,
	search = '',
	level,
}: GenericTableProps) => {
	const filteredName =
		search.length > 0
			? listItems?.filter((item) => item.firstItem.toLowerCase().includes(search?.toLowerCase()))
			: [];

	return (
		<div>
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
								{search.length < 0
									? filteredName?.map((item, index) => {
											const items = Object.entries(item);
											return (
												<tr key={index}>
													{items.map((item2, idx) => {
														if (
															item2[0] != 'id' &&
															item2[0] != 'updated_at' &&
															item2[0] != 'created_at'
														) {
															return (
																<td key={idx} className="whitespace-nowrap px-8 py-4 font-medium">
																	{Array.isArray(item2[1])
																		? item2[1].map((item3) => item3.name).join(', ')
																		: Object.is(item2[1], Object(item2[1]))
																		? item2[1].name
																		: item2[1]}
																</td>
															);
														}
													})}
													<td className="whitespace-nowrap px-2 py-4 font-medium">
														<div className="flex flex-row gap-2">
															<button
																onClick={() => {
																	onEdit(item.id);
																}}
															>
																<img src={PencilIcon} />
															</button>
															<button
																onClick={() => {
																	onDelete(item.id);
																}}
															>
																<img src={TrashIcon} />
															</button>
														</div>
													</td>
												</tr>
											);
									  })
									: listItems?.map((item, index) => {
											const items = Object.entries(item);
											return (
												<tr key={index}>
													{items.map((item2, idx) => {
														if (
															item2[0] != 'id' &&
															item2[0] != 'updated_at' &&
															item2[0] != 'created_at' &&
															!(columns.includes('Membros') && item2[0] == 'organization_id')
														) {
															return (
																<td key={idx} className="whitespace-nowrap px-8 py-4 font-medium">
																	{Array.isArray(item2[1])
																		? item2[1].map((item3) => item3.name).join(', ')
																		: Object.is(item2[1], Object(item2[1]))
																		? item2[1].name
																		: item2[1]}
																</td>
															);
														}
													})}
													<td className="whitespace-nowrap px-2 py-4 font-medium">
														<div className="flex flex-row gap-2">
															<button
																onClick={() => {
																	onEdit(item.id);
																}}
															>
																<img src={PencilIcon} />
															</button>
															<button
																onClick={() => {
																	onDelete(item.id);
																}}
															>
																<img src={TrashIcon} />
															</button>
														</div>
													</td>
												</tr>
											);
									  })}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GenericTable;
