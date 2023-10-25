import React from 'react';

interface BreadcrumbProps {
	display: string;
}
const items = [
	{ label: 'Identificação', display: '/' },
	{ label: 'Importação', display: '/import' },
	{ label: 'Resumo', display: '/resume' },
];

const Breadcrumb = ({ display }: BreadcrumbProps) => {
	return (
		<div className="bg-red-500 flex justify-center">
			<nav className="absolute top-44">
				<ol className="breadcrumb flex justify-start gap-3">
					{items.map((item, index) => (
						<li key={index} className="w-44 flex border-b-[6px] border-b-orange-500">
							{item.label}
						</li>
					))}
				</ol>
			</nav>
		</div>
	);
};

export default Breadcrumb;
