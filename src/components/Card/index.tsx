import React from 'react';

interface CardProps {
	children?: React.ReactNode;
	title: string;
}

function Card({ children, title }: CardProps) {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen bg-triider-grayscale-gray4">
			<div className="flex flex-col box-content h-96 w-1/2 border-2 p-20 bg-white rounded-3xl gap-2">
				<h1 className="text-4xl font-bold underline decoration-triider-primary-orange2 mb-6 underline-offset-8">
					{title?.toUpperCase()}
				</h1>
				{children}
			</div>
		</div>
	);
}

export default Card;
