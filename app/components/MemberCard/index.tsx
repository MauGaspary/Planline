import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface MemberCard {
	name: string;
	role: string;
}

export default function MemberCard({ name, role }: MemberCard) {
	return (
		<TouchableOpacity className="w-72 h-14 bg-white rounded-lg shadow shadow-gray-400 ">
			<View className="flex-row">
				<View className="w-2 h-14 rounded-l bg-triider-primary-orange-dark"></View>
				<View className="justify-center ml-5">
					<Text className="text-base">{name}</Text>
					<Text className="text-xs text-triider-grayscale-gray1">{role}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
