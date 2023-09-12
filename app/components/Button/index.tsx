import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';

interface ButtonComponent {
	label: string;
}
export default function ButtonComponent({ label }: ButtonComponent) {
	return (
		<TouchableOpacity className="rounded-2xl h-14 w-80 items-center justify-center bg-triider-primary-orange1 shadow shadow-gray-400">
			<Text className="text-lg text-white font-bold">{label}</Text>
		</TouchableOpacity>
	);
}
