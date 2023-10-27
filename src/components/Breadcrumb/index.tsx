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
		<div className="flex justify-center absolute -top-14 left-0">
			<nav>
				<ol className="breadcrumb flex justify-start gap-3">
					{items.map((item, index) => (
						<div key={index} className="flex flex-col items-center">
							<li
								className={`w-44 flex text-xl ${
									isActive(display, index) ? 'font-medium' : 'text-gray-300'
								}`}
							>
								{item.label}
							</li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="180"
								height="6"
								viewBox="0 0 180 6"
								fill="none"
							>
								<path
									d="M3.23375 0H180L175.8 6H0L3.23375 0Z"
									fill={isActive(display, index) ? '#F07E31' : '#CBCBCB'}
								/>
							</svg>
						</div>
					))}
				</ol>
			</nav>
		</div>
	);
};

export default Breadcrumb;
