import React from 'react';

interface ButtonProps {
	disabled?: boolean;
	children: React.ReactNode;
}

function Button(props: ButtonProps) {
	const buttonClass = props.disabled
		? 'w-[359px] h-[55px] text-white bg-triider-primary-orange-dark p-2 rounded-[8px] opacity-30 cursor-default'
		: 'w-[359px] h-[55px] text-white bg-triider-primary-orange-dark p-2 rounded-[8px] hover:animate-pulse hover:shadow-md';
	return (
		<button className={buttonClass} type="submit" value="Submit" disabled={props.disabled}>
			{props.children}
		</button>
	);
}
export default Button;
