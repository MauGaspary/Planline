import React from 'react';

interface ButtonProps {
	disabled?: boolean;
	secondary?: boolean;
	secondaryOutline?: boolean;
	small?: boolean;
	xs?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	disabled,
	secondary,
	secondaryOutline,
	small,
	xs,
	children,
}) => {
	let buttonClass = small ? 'w-[230px] ' : 'w-[359px] ';

	if (xs) buttonClass = 'w-[172px] ';

	if (disabled) {
		buttonClass +=
			'h-[48px] text-white bg-triider-primary-orange-dark shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-2 rounded-[8px] opacity-30 cursor-default';
	} else if (secondary) {
		buttonClass +=
			'h-[48px] text-stone-800 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white p-2 rounded-[8px] hover:animate-pulse hover:shadow-md';
	} else if (secondaryOutline) {
		buttonClass +=
			'h-[48px] text-stone-800 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] border-2 border-triider-primary-orange-dark bg-white p-2 rounded-[8px] hover:animate-pulse hover:shadow-md';
	} else {
		buttonClass +=
			'h-[48px] text-white bg-triider-primary-orange-dark shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-2 rounded-[8px] hover:animate-pulse hover:shadow-md';
	}

	return (
		<button className={buttonClass} type="submit" value="Submit" disabled={disabled}>
			{children}
		</button>
	);
};
export default Button;
