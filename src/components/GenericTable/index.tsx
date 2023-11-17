/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import PencilIcon from '../../assets/icons/pencilIcon.svg';
import TrashIcon from '../../assets/icons/trashIcon.svg';

interface ListItem {
	name: string;
	id?: string;
	created_at?: string;
}

interface GenericTableProps {
	columns: string[];
	listItems?: ListItem[];
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
			? listItems?.filter((item) => item.name.toLowerCase().includes(search?.toLowerCase()))
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
									? filteredName
											?.sort(function (a, b) {
												// Turn your strings into dates, and then subtract them
												// to get a value that is either negative, positive, or zero.
												return (
													new Date(b.created_at || '').getTime() -
													new Date(a.created_at || '').getTime()
												);
											})
											.map((item, index) => {
												const items = Object.entries(item);
												return (
													<tr key={index}>
														{items.map((item2, idx) => {
															if (
																item2[0] != 'id' &&
																item2[0] != 'updated_at' &&
																item2[0] != 'created_at' &&
																item2[0] != 'organization_id'
															) {
																return (
																	<td key={idx} className="whitespace-nowrap px-8 py-4 font-medium">
																		{Array.isArray(item2[1]) ? (
																			<p className="max-w-[40%] overflow-clip">
																				{item2[1].map((item3) => item3.name).join(', ')}
																			</p>
																		) : Object.is(item2[1], Object(item2[1])) ? (
																			item2[1].name
																		) : (
																			item2[1]
																		)}
																	</td>
																);
															}
														})}
														<td className="whitespace-nowrap px-2 py-4 font-medium">
															<div className="flex flex-row gap-2">
																<button onClick={() => onEdit && onEdit(item.id || '')}>
																	<img src={PencilIcon} />
																</button>
																<button onClick={() => onDelete && onDelete(item.id || '')}>
																	<img src={TrashIcon} />
																</button>
															</div>
														</td>
													</tr>
												);
											})
									: listItems
											?.sort(function (a, b) {
												// Turn your strings into dates, and then subtract them
												// to get a value that is either negative, positive, or zero.
												return (
													new Date(b.created_at || '').getTime() -
													new Date(a.created_at || '').getTime()
												);
											})
											.map((item, index) => {
												const items = Object.entries(item);
												return (
													<tr key={index}>
														{items.map((item2, idx) => {
															if (
																item2[0] != 'id' &&
																item2[0] != 'updated_at' &&
																item2[0] != 'created_at' &&
																item2[0] != 'organization_id'
															) {
																return (
																	<>
																		{Array.isArray(item2[1]) ? (
																			<td
																				key={idx}
																				className="whitespace-nowrap px-8 py-4 font-medium max-w-xs overflow-clip"
																			>
																				{item2[1].map((item3) => item3.name).join(', ')}
																			</td>
																		) : Object.is(item2[1], Object(item2[1])) ? (
																			<td
																				key={idx}
																				className="whitespace-nowrap px-8 py-4 font-medium"
																			>
																				{item2[1].name}
																			</td>
																		) : (
																			<td
																				key={idx}
																				className="whitespace-nowrap px-8 py-4 font-medium"
																			>
																				{item2[1]}
																			</td>
																		)}
																	</>
																);
															}
														})}
														<td className="whitespace-nowrap px-2 py-4 font-medium">
															<div className="flex flex-row gap-2">
																<button onClick={() => onEdit && onEdit(item.id || '')}>
																	<img src={PencilIcon} />
																</button>
																<button onClick={() => onDelete && onDelete(item.id || '')}>
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
