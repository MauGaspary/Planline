import { useCallback, useState } from 'react';
import { DropzoneState, useDropzone } from 'react-dropzone';
import CloseIcon from '../../assets/icons/closeIcon.svg';
import FileIcon from '../../assets/icons/fileIcon.svg';
import UploadIcon from '../../assets/icons/uploadIcon.svg';
interface InputProps {
	dropzone: DropzoneState;
}

interface HasFileProps {
	file: File | null;
	removeFile: () => void;
}

interface ButtonProps {
	buttonState: () => void;
}

export const FileInput = ({ buttonState }: ButtonProps) => {
	const [file, setFile] = useState<File | null>(null);

	const removeFile = useCallback(() => {
		setFile(null);
		buttonState();
	}, [file]);

	const onDrop = useCallback((files: File[]) => {
		setFile(files[0]);
		buttonState();
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

const HasFile = ({ file, removeFile }: HasFileProps) => {
	return (
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
};
