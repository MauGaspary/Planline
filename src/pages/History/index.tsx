/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect } from 'react';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import Container from '../../components/Container';
import { InputHeader } from '../../components/InputHeader/Index';
import { InputText } from '../../components/InputText/Index';
import { useGet } from '../../hooks/useGet';
import { CsvDownloadFilesDTO } from '../../types/CsvDownloadFilesDTO';
import Spinner from '../../components/Spinner';
import CsvImage from '../../assets/images/csv.png';

function History() {
	const { data: info, request: getInfo, isLoading } = useGet<CsvDownloadFilesDTO[]>();

	useEffect(() => {
		getInfo(`/`);
	}, []);

	const CsvContainer = useCallback((item: any) => {
		const handleParseCSV = () => {
			const csvData: any[] | Papa.UnparseObject<any> = [];

			item.stories.forEach((item: any) => {
				const row = {
					Story: [item.name],
					SumOfTasksVotes: item.final_points,
					Tasks: item.tasks.map((task: any) => task.name),
					TasksVotes: item.tasks.map((task: any) => task.points),
				};

				csvData.push(row);
			});

			const csv = Papa.unparse(csvData, { delimiter: ';' });
			return csv;
		};

		const downloadFile = () => {
			const csv = handleParseCSV();
			const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
			saveAs(blob, `Squad_-_${item.name}.csv`);
		};

		return (
			<div
				className="max-w-sm mx-auto flex p-3 rounded-lg shadow-xl cursor-pointer"
				onClick={downloadFile}
			>
				<div className="flex flex-shrink-0 items-center justify-center">
					<img src={CsvImage} alt="csv" className="h-12 w-12" />
				</div>
				<div className="ml-6 pt-1">
					<h4 className="text-xl text-gray-900">{item.name}</h4>
					<p className="text-base text-gray-600">
						Soma das histórias:{' '}
						{item?.stories?.reduce((acc: any, story: any) => acc + story?.final_points, 0)}
					</p>
				</div>
			</div>
		);
	}, []);

	return (
		<Container title="histórico">
			<InputHeader noButton>
				<InputText value="" placeholder="Arquivo" size="medium" isRequired={true} />
			</InputHeader>
			{isLoading ? (
				<div className="w-full flex items-center justify-center mt-8 h-60">
					<Spinner color="triider-primary-orange-dark" size="16" />
				</div>
			) : (
				<div className="w-full flex items-start justify-center mt-8 h-60">
					{info?.map((item) => CsvContainer(item))}
				</div>
			)}
		</Container>
	);
}

export default History;
