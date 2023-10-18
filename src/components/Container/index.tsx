import React from 'react';

interface CardProps {
	children?: React.ReactNode;
	title: string;
	small?: boolean;
}

function Container({ children, title, small }: CardProps) {
	const titleClass = small
		? 'text-4xl font-medium text-triider-grayscale-gray1 '
		: 'text-4xl font-bold underline decoration-triider-primary-orange2 mb-6 underline-offset-8';

	const smallClass = small
		? 'bg-white w-[600px] h-[500px] drop-shadow-md rounded-lg flex flex-col p-12 gap-10 text-center'
		: 'flex flex-col box-content w-1/2 border-2 p-20 bg-white rounded-3xl gap-2';
	return (
		<div className="flex flex-col justify-center items-center min-h-screen bg-triider-grayscale-gray4">
			<div className={smallClass}>
				<h1 className={titleClass}>{small ? title : title.toUpperCase()}</h1>
				{children}
			</div>
		</div>
	);
}

export default Container;
