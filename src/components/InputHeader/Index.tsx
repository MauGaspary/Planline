import Button from '../Button';

export interface InputHeaderProps {
	children: React.ReactNode;
	onSearchButtonClick?: () => void;
	onAddButtonClick?: () => void;
}

export function InputHeader({ children, onSearchButtonClick, onAddButtonClick }: InputHeaderProps) {
	return (
		<div className="flex space-x-5">
			{children}
			<Button variant="primary" size="small" onClickAction={onSearchButtonClick}>
				Buscar
			</Button>
			<Button variant="info" size="xsmall" onClickAction={onAddButtonClick}>
				+
			</Button>
		</div>
	);
}
