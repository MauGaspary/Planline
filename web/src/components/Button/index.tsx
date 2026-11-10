import React from 'react';

interface ButtonProps {
	size?: 'small' | 'medium' | 'large' | 'icon' | 'xsmall';
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'secondaryOutline' | 'disabled' | 'ghost' | 'info' | 'alert';
	onClickAction?: () => void;
}

const Button = ({ size = 'medium', children, variant = 'primary', onClickAction }: ButtonProps) => {
	const sizeClasses = {
		small: 'w-44',
		medium: 'w-56',
		large: 'w-80',
		icon: 'w-12',
		xsmall: 'w-20',
	};

	const variantClasses = {
		info: 'text-white bg-triider-secondary-purple2 hover:animate-pulse hover:shadow-md',
		disabled: 'text-white bg-triider-primary-orange-dark opacity-30 cursor-default',
		secondary: 'text-stone-800 bg-white hover:animate-pulse hover:shadow-md',
		secondaryOutline:
			'text-stone-800 border-2 border-triider-primary-orange-dark bg-white hover:animate-pulse hover:shadow-md',
		primary: 'text-white bg-triider-primary-orange-dark hover:animate-pulse hover:shadow-md',
		alert: 'text-white bg-triider-alert-red hover:animate-pulse hover:shadow-md',
		ghost:
			'text-white bg-triider-primary-orange2 hover:animate-pulse hover:shadow-md border-2 border-white ',
	};

	const defaultClasses = 'h-12 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] p-2 rounded-lg';

	const classes = `${defaultClasses} ${sizeClasses[size]} ${variantClasses[variant]}`;

	return (
		<button
			className={classes}
			onClick={() => {
				if (variant === 'disabled' || !onClickAction) return;
				onClickAction();
			}}
			type="submit"
			value="Submit"
		>
			{children}
		</button>
	);
};
export default Button;
