import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MemberCard() {
	return (
		<TouchableOpacity className="w-72 h-16 rounded-lg bg-red-500">
			<Text>MemberCard</Text>
		</TouchableOpacity>
	);
}
