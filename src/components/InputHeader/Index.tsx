import Button from '../Button';

export interface InputHeaderProps {
	children: React.ReactNode;
	onSearchButtonClick?: () => void;
	onAddButtonClick?: () => void;
}

export function InputHeader(props: InputHeaderProps) {
	return (
		<div className="flex space-x-5">
			{props.children}
			<Button variant="primary" size="small" onClickAction={props.onSearchButtonClick}>
				Buscar
			</Button>
			<Button variant="info" size="xsmall" onClickAction={props.onAddButtonClick}>
				+
			</Button>
		</div>
	);
}
