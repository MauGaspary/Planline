import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface BtnProps {
	label: string;
}

// eslint-disable-next-line react/prop-types
const ButtonComponent: React.FC<BtnProps> = ({ label }) => {
	return (
		<TouchableOpacity className="rounded-2xl h-[58] w-[320] items-center justify-center bg-[#FF6600] shadow shadow-gray-400">
			<Text className="text-lg text-white font-bold">{label}</Text>
		</TouchableOpacity>
	);
};

export default ButtonComponent;
