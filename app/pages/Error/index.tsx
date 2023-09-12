import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SadTriider from '../../assets/images/sadOrangeTriider.png';
import ButtonComponent from '../../components/Button';

interface ErrorComponent {
	label: string;
}

export default function GenericError({ label }: ErrorComponent) {
	return (
		<View className="items-center bg-white flex-1">
			<Image
				source={SadTriider}
				className="mt-24"
				style={{ height: 250, resizeMode: 'contain' }}
			></Image>
			<Text className="text-2xl font-body mt-8 mb-56">{label}</Text>
			<ButtonComponent label="Go back" />
			<StatusBar style="inverted" />
		</View>
	);
}
