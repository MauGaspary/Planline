import Button from '../Button';

export interface InputHeaderProps {
	children: React.ReactNode;
	onAddButtonClick?: () => void;
}

export function InputHeader({ children, onAddButtonClick }: InputHeaderProps) {
	return (
		<div className="flex space-x-5">
			{children}
			<Button variant="info" size="xsmall" onClickAction={onAddButtonClick}>
				+
			</Button>
		</div>
	);
}
