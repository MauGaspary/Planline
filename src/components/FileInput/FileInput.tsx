import { useCallback, useState } from 'react';
import Button from '../Button';
import { DropzoneState, useDropzone } from 'react-dropzone';
import UploadIcon from '../../assets/icons/uploadIcon.svg';
import FileIcon from '../../assets/icons/fileIcon.svg';
import CloseIcon from '../../assets/icons/closeIcon.svg';
interface InputProps {
	dropzone: DropzoneState;
}

interface HasFileProps {
	file: File | null;
}
export const FileInput = () => {
	const [file, setFile] = useState<File | null>(null);

	const onDrop = useCallback((files: File[]) => {
		setFile(files[0]);
	}, []);

	const dropzone = useDropzone({
		onDrop,
		accept: {
			'application/vnd.ms-excel': ['.csv'],
		},
	});

	if (file) return <HasFile file={file} />;
	return <Input dropzone={dropzone} />;
};

const Input = ({ dropzone }: InputProps) => {
	const { getRootProps, getInputProps, isDragActive } = dropzone;
	return (
		<div
			{...getRootProps()}
			className="w-[500px] h-[400px] rounded-[8px] flex flex-col p-6 gap-10 text-center border-dashed border-4 border-triider-primary-orange-dark transition-all"
		>
			<label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
				<div className="flex flex-col items-center justify-center pt-5 pb-6 w-full h-full">
					<img
						src={UploadIcon}
						alt="upload"
						className={`w-12 h-12 mb-3 ${
							isDragActive ? 'text-triider-secondary-purple1' : 'text-triider-primary-orange4'
						}`}
					/>

					{isDragActive ? (
						<p className="text-lg text-triider-secondary-purple1 text-center font-bold">
							Solte aqui para adicionar
						</p>
					) : (
						<>
							<p className=" text-lg text-stone-800 text-center p-6">
								<span className="font-bold text-stone-800 ">
									Selecione um arquivo ou arraste e solte aqui
								</span>
							</p>
							<Button title="Selecionar arquivo" />
						</>
					)}
				</div>
			</label>
			<input {...getInputProps()} className="hidden" />
		</div>
	);
};

const HasFile = ({ file }: HasFileProps) => {
	return (
		<div className="w-[500px] h-[400px] rounded-[8px] flex flex-col p-6 gap-10 text-center border-dashed border-4 border-triider-primary-orange-dark transition-all">
			<div>
				<img src={FileIcon} alt="file" className="w-5 h-5 my-4 ml-4" />
				<span className="text-sm text-triider-grayscale-gray1 my-4">{file?.name}</span>
				<button type="button" className="place-self-start mt-1 p-1">
					<img src={CloseIcon} alt="close" className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
};
