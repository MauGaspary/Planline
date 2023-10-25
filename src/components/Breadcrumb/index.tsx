import React from 'react';

interface BreadcrumbProps {
	display: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ display }) => {
	return (
		// <nav className="absolute top-0 left-0 -translate-y-10 flex justify-start">
		// 	<ol className="breadcrumb flex justify-start gap-3">
		// 		{items.map((item, index) => (
		// 			<li key={index} className="w-44 flex border-b-[6px] border-b-orange-500">
		// 				{item.link ? (
		// 					<a href={item.link} className="text-stone-950  text-xl">
		// 						{item.label}
		// 					</a>
		// 				) : (
		// 					<span className="text-gray-500">{item.label}</span>
		// 				)}
		// 			</li>
		// 		))}
		// 	</ol>
		// </nav>
		<></>
	);
};

export default Breadcrumb;
