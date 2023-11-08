import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

interface ButtonProps {
	label: string;
	variant?: 'primary' | 'ghost';
	onClick?: () => void;
	disabled?: boolean;
}
export default function Button({
	label,
	variant = 'primary',
	onClick,
	disabled = false,
}: ButtonProps) {
	const variantButtonClasses = {
		primary: 'bg-triider-primary-orange1',
		ghost: 'bg-white',
	};

	const disabledButtonClasses = {
		primary: 'bg-gray-300',
		ghost: 'bg-white',
	};

	const variantTextClasses = {
		primary: 'text-white',
		ghost: 'text-black',
	};

	const disabledTextClasses = {
		primary: 'text-white',
		ghost: 'text-gray-300',
	};

	const defaultButtonClasses =
		'rounded-2xl h-14 w-72 items-center justify-center shadow shadow-gray-400';
	const defaultTextClasses = 'font-bold text-lg';

	const buttonClasses = disabled
		? `${defaultButtonClasses} ${disabledButtonClasses[variant]}`
		: `${defaultButtonClasses} ${variantButtonClasses[variant]}`;
	const textClasses = disabled
		? `${defaultTextClasses} ${disabledTextClasses[variant]}`
		: `${defaultTextClasses} ${variantTextClasses[variant]}`;

	return (
		<TouchableOpacity disabled={disabled} className={buttonClasses} onPress={onClick}>
			<Text className={textClasses}>{label}</Text>
		</TouchableOpacity>
	);
}
