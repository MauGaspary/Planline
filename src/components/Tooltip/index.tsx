import { MouseEvent, ReactNode, useState } from 'react';

interface ToolTipProps {
	children: ReactNode;
	tooltip?: string;
}

export default function ToolTip({ children, tooltip }: ToolTipProps) {
	const [tooltipPosition, setTooltipPosition] = useState({ left: 0 });

	const handleMouseEnter = (event: MouseEvent<HTMLDivElement>): void => {
		const { left } = event.currentTarget.getBoundingClientRect();

		setTooltipPosition({ left: event.clientX - left });
	};

	return (
		<div onMouseEnter={handleMouseEnter} className="group relative inline-block">
			{children}

			{tooltip && (
				<span
					style={{ left: `${tooltipPosition.left}px` }}
					className="invisible max-w-[240px] group-hover:visible opacity-0 group-hover:opacity-100 transition bg-triider-helper-green2 text-white p-1 rounded absolute top-full mt-2"
				>
					{tooltip}
				</span>
			)}
		</div>
	);
}
