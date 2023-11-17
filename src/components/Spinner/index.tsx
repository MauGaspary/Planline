interface SpinnerProps {
	color?: string;
	size?: string;
}

export default function Spinner({ color = 'white', size = '4' }: SpinnerProps) {
	const style =
		color && size
			? `animate-spin mr-3 inline-block w-${size} h-${size} border-[3px] border-current border-t-transparent text-${color} rounded-full`
			: 'animate-spin mr-3 inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full';
	return (
		<div className={style} role="status" aria-label="loading">
			<span className="sr-only">Loading...</span>
		</div>
	);
}
