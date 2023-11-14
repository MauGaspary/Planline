export default function Spinner() {
	return (
		<div
			className="animate-spin mr-3 inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
			role="status"
			aria-label="loading"
		>
			<span className="sr-only">Loading...</span>
		</div>
	);
}
