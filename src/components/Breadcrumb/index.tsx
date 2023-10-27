import React from 'react';

interface BreadcrumbProps {
	display: string;
}
const items = [{ label: 'Identificação' }, { label: 'Importação' }, { label: 'Resumo' }];

const isActive = (display: string, index: number) => {
	if (display === 'home' && index === 0) return true;
	if (display === 'import' && index <= 1) return true;
	if (display === 'resume' && index <= 2) return true;
	return false;
};

const Breadcrumb = ({ display }: BreadcrumbProps) => {
	return (
		<div className="bg-red-500 flex justify-center">
			<nav className="absolute top-0 z-10">
				<ol className="breadcrumb flex justify-start gap-3">
					{items.map((item, index) => (
						<li
							key={index}
							className={`w-44 flex border-b-[6px] text-xl ${
								isActive(display, index)
									? 'border-b-orange-500 font-medium'
									: 'border-b-gray-300 text-gray-300'
							}`}
						>
							{item.label}
						</li>
					))}
				</ol>
			</nav>
		</div>
	);
};

export default Breadcrumb;
