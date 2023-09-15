import { Image, View, Text } from 'react-native';
import Logo from '../../assets/images/LogoLaranjaTriider.png';

export default function LoadingHome() {
	return (
		<View className="flex-1 bg-gray-200 flex-col items-center ">
			<Image source={Logo} style={{ height: 350, resizeMode: 'contain' }} className="mt-40" />
			<Text className="text-4xl font-title text-triider-grayscale-gray1 ">PlanLine</Text>
		</View>
	);
}
