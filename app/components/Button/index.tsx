import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

interface ButtonProps {
	label: string;
	variant?: 'primary' | 'ghost';
	onClick?: () => void;
}
export default function Button({ label, variant = 'primary', onClick }: ButtonProps) {
	return (
		<TouchableOpacity
			className={`rounded-2xl h-14 w-72 items-center ${
				variant === 'primary' ? 'bg-triider-primary-orange1' : 'bg-white'
			} justify-center shadow shadow-gray-400`}
			onPress={onClick}
		>
			<Text className={`text-lg ${variant === 'primary' ? 'text-white' : 'text-black'} font-bold`}>
				{label}
			</Text>
		</TouchableOpacity>
	);
}
