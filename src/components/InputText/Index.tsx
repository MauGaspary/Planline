import React from 'react';

export interface InputTextProps {
	placeholder: string;
	size: 'small' | 'medium' | 'large' | 'icon' | 'xsmall' | 'full';
	isRequired?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

export function InputText({ placeholder, size, isRequired, onChange, value }: InputTextProps) {
	const sizeClasses = {
		small: 'w-44',
		medium: 'w-56',
		large: 'w-80',
		icon: 'w-12',
		xsmall: 'w-20',
		full: 'w-full',
	};

	const defaultClasses =
		'block p-4 text-sm border border-triider-grayscale-gray3 rounded-lg bg-triider-grayscale-gray4 focus:outline-none focus:ring-2 focus:ring-triider-primary-orange2 ' +
		sizeClasses[size];
	return (
		<input
			type="text"
			className={defaultClasses}
			placeholder={placeholder}
			value={value}
			required={isRequired}
			onChange={onChange}
		/>
	);
}
