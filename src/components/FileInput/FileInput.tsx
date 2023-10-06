import { useCallback, useState } from 'react';
import { DropzoneState, useDropzone } from 'react-dropzone';
import CloseIcon from '../../assets/icons/closeIcon.svg';
import FileIcon from '../../assets/icons/fileIcon.svg';
import UploadIcon from '../../assets/icons/uploadIcon.svg';
import { usInfo } from '../../types/usInfo';

interface InputProps {
	dropzone: DropzoneState;
}

interface HasFileProps {
	file: File | null;
	removeFile: () => void;
}

interface ButtonProps {
	buttonState: (usArray: usInfo[] | null, fileName: string) => void;
}

export const FileInput = ({ buttonState }: ButtonProps) => {
	const [file, setFile] = useState<File | null>(null);

	const removeFile = useCallback(() => {
		setFile(null);
		buttonState(null, '');
	}, [file]);

	const readUploadedFileAsText = (inputFile: Blob) => {
		const temporaryFileReader = new FileReader();

		return new Promise((resolve, reject) => {
			temporaryFileReader.onerror = () => {
				temporaryFileReader.abort();
				reject(new DOMException('Problema ao realizar o parse do arquivo.'));
			};

			temporaryFileReader.onload = () => {
				resolve(temporaryFileReader.result);
			};
			temporaryFileReader.readAsText(inputFile, 'ISO-8859-15');
		});
	};

	const onDrop = useCallback(async (files: File[]) => {
		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const fileContents: any = await readUploadedFileAsText(files[0]);
			const fileName: string = files[0].name;

			const lines = fileContents?.split('\n');
			const info: usInfo[] = [];
			lines?.forEach((line: string, index: number) => {
				if (
					line?.includes(
						'Subitems;Name;Owner;Estimated task;Status task;Start;Dependent;Stack;End;Item ID (auto generated);'
					)
				) {
					const previousLine = lines[index - 1];
					const parsed = previousLine.split(';');
					const us = parsed[0];
					const tasks = parsed[1].split(', ');
					info.push({
						us: us,
						tasks: tasks,
					});
				}
			});
			if (info) {
				setFile(files[0]);
				buttonState(info, fileName);
			}
		} catch (e) {
			console.warn('Erro ao ler o arquivo');
		}
	}, []);

	const dropzone = useDropzone({
		onDrop,
		accept: {
			'text/csv': ['.csv'],
		},
	});

	if (file) return <HasFile file={file} removeFile={removeFile} />;
	return <Input dropzone={dropzone} />;
};

const Input = ({ dropzone }: InputProps) => {
	const { getRootProps, getInputProps, isDragActive } = dropzone;
	return (
		<div {...getRootProps()} className="rounded-lg flex flex-col transition-all">
			<input {...getInputProps()} />
			<div className="flex flex-col items-center justify-center w-full h-full">
				<img src={UploadIcon} alt="upload" className="h-24" />

				{isDragActive ? (
					<p className="text-lg text-triider-secondary-purple1 text-center font-bold">
						Solte aqui para adicionar
					</p>
				) : (
					<div>
						<div className="font-bold text-xs text-stone-800 mt-2 mb-6">
							Selecione um arquivo ou arraste e solte aqui
						</div>
						<p className="h-12 cursor-pointer text-stone-800 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] border-2 border-triider-primary-orange-dark bg-white p-2 rounded-lg hover:animate-pulse hover:shadow-md">
							Selecionar arquivo
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

const HasFile = ({ file, removeFile }: HasFileProps) => (
	<div className="rounded-lg flex flex-col p-6 text-center justify-center transition-all">
		<div className="border rounded-lg flex items-center justify-center gap-2">
			<img src={FileIcon} alt="file" className="w-10 h-10 my-4 ml-4" />
			<span className="text-sm my-4  text-stone-800 ">{file?.name}</span>
			<button type="button" onClick={removeFile} className="place-self-start mt-1 p-1">
				<img src={CloseIcon} alt="close" className="w-5 h-5" />
			</button>
		</div>
	</div>
);
