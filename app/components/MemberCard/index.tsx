import { Text, View, TouchableOpacity } from 'react-native';

interface MemberCard {
	name: string;
	role: string;
	isSelected: boolean;
	onClick: () => void;
}

export default function MemberCard({ name, role, isSelected, onClick }: MemberCard) {
	return (
		<TouchableOpacity
			className={`w-72 h-14 overflow-hidden bg-white border ${
				isSelected ? 'border-triider-primary-orange-dark' : 'border-transparent'
			} rounded-lg shadow shadow-gray-400`}
			onPress={onClick}
		>
			<View className="flex-row">
				<View className="w-2 h-14  bg-triider-primary-orange-dark"></View>
				<View className="justify-center ml-5">
					<Text className="text-base">{name}</Text>
					<Text className="text-xs text-triider-grayscale-gray1">{role}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}
