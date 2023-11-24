import Button from '../Button';

export interface InputHeaderProps {
	children: React.ReactNode;
	onAddButtonClick?: () => void;
	noButton?: boolean;
}

export function InputHeader({ children, onAddButtonClick, noButton = false }: InputHeaderProps) {
	return (
		<div className="flex space-x-5">
			{children}
			{noButton ? null : (
				<Button variant="info" size="xsmall" onClickAction={onAddButtonClick}>
					+
				</Button>
			)}
		</div>
	);
}
