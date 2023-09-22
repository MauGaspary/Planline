import React from 'react';

interface ButtonProps {
	disabled?: boolean;
	secondary?: boolean;
	secondaryOutline?: boolean;
	size?: 'small' | 'medium';
	children: React.ReactNode;
}

const Button = ({ disabled, secondary, secondaryOutline, size, children }: ButtonProps) => {
	let buttonClass = size === 'medium' ? 'w-56' : 'w-80';
	buttonClass = size === 'small' ? 'w-44' : 'w-80';

	if (disabled) {
		buttonClass +=
			' h-12 text-white bg-triider-primary-orange-dark shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-2 rounded-lg opacity-30 cursor-default';
	} else if (secondary) {
		buttonClass +=
			' h-12 text-stone-800 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white p-2 rounded-lg hover:animate-pulse hover:shadow-md';
	} else if (secondaryOutline) {
		buttonClass +=
			' h-12 text-stone-800 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] border-2 border-triider-primary-orange-dark bg-white p-2 rounded-lg hover:animate-pulse hover:shadow-md';
	} else {
		buttonClass +=
			' h-12 text-white bg-triider-primary-orange-dark shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-2 rounded-lg hover:animate-pulse hover:shadow-md';
	}

	return (
		<button className={buttonClass} type="submit" value="Submit" disabled={disabled}>
			{children}
		</button>
	);
};
export default Button;
