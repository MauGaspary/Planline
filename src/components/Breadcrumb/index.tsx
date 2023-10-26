import React from 'react';

interface BreadcrumbProps {
	display: string;
}
const items = [{ label: 'Identificação' }, { label: 'Importação' }, { label: 'Resumo' }];

const getBreadcrumbItemClass = (display: string, index: number) => {
	if (display === 'home' && index === 0) return 'active';
	if (display === 'import' && index <= 1) return 'active';
	if (display === 'resume' && index <= 2) return 'active';
	return 'inactive';
};

const Breadcrumb = ({ display }: BreadcrumbProps) => {
	return (
		<div className="bg-red-500 flex justify-center">
			<nav className="absolute">
				<ol className="breadcrumb flex justify-start gap-3">
					{items.map((item, index) => (
						<li
							key={index}
							className={`w-44 flex border-b-[6px] text-xl font-medium ${
								getBreadcrumbItemClass(display, index) === 'active'
									? 'border-b-orange-500'
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
