import { useCallback, useState } from 'react';
import { DropzoneState, useDropzone } from 'react-dropzone';
import UploadIcon from '../../assets/icons/uploadIcon.svg';
import FileIcon from '../../assets/icons/fileIcon.svg';
import CloseIcon from '../../assets/icons/closeIcon.svg';
import Button from '../Button';
interface InputProps {
	dropzone: DropzoneState;
}

interface HasFileProps {
	file: File | null;
	removeFile: () => void;
}
export const FileInput = () => {
	const [file, setFile] = useState<File | null>(null);

	const removeFile = useCallback(() => {
		setFile(null);
	}, [file]);

	const onDrop = useCallback((files: File[]) => {
		setFile(files[0]);
	}, []);

	const dropzone = useDropzone({
		onDrop,
		accept: {
			'application/vnd.ms-excel': ['.csv'],
		},
	});

	if (file) return <HasFile file={file} removeFile={removeFile} />;
	return <Input dropzone={dropzone} />;
};

const Input = ({ dropzone }: InputProps) => {
	const { getRootProps, getInputProps, isDragActive } = dropzone;
	return (
		<div
			{...getRootProps()}
			className="rounded-[8px] flex flex-col p-6 text-center border-dashed border-4 border-triider-primary-orange-dark transition-all"
		>
			<label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
				<div className="flex flex-col items-center justify-center w-full h-full">
					<img
						src={UploadIcon}
						alt="upload"
						className="w-16 h-16 border-triider-primary-orange-dark "
					/>

					{isDragActive ? (
						<p className="text-lg text-stone-800 text-center p-6 font-bold">
							Solte aqui para adicionar
						</p>
					) : (
						<>
							<p className=" overflow-auto z-10 items-center text-lg text-stone-800 text-center p-6">
								<span className="text-gray-700 font-medium">
									Selecione um arquivo ou arraste e solte aqui
								</span>
							</p>
							<Button>Selecionar arquivo</Button>
						</>
					)}
				</div>
			</label>
			<input {...getInputProps()} className="hidden" />
		</div>
	);
};

const HasFile = ({ file, removeFile }: HasFileProps) => {
	return (
		<div className="rounded-[8px] flex flex-col p-6 text-center border-dashed border-4 border-triider-primary-orange-dark transition-all">
			<div className="border rounded-[8px] flex items-center justify-center gap-2">
				<img src={FileIcon} alt="file" className="w-10 h-10 my-4 ml-4" />
				<span className="text-sm my-4  text-stone-800 ">{file?.name}</span>
				<button type="button" onClick={removeFile} className="place-self-start mt-1 p-1">
					<img src={CloseIcon} alt="close" className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
};
