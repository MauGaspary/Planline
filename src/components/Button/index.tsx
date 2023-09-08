import React from 'react';

interface ButtonProps {
	title: string;
}

function Button({ title }: ButtonProps) {
	return (
		<button
			className="w-[359px] h-[55px] text-white bg-triider-primary-orange-dark p-2 rounded-[8px] hover:animate-pulse hover:shadow-md"
			type="submit"
			value="Submit"
		>
			{title}
		</button>
	);
}
export default Button;
