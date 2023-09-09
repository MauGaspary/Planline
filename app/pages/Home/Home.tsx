import { Image, View, Text } from 'react-native';
import Logo from '../../assets/images/LogoLaranjaTriider.png';
import ButtonComponent from '../../components/Button';

export default function Home() {
	return (
		<View className="flex-1 bg-gray-200 flex-col items-center ">
			<View>
				<Image source={Logo} style={{ height: 350, resizeMode: 'contain' }} className="mt-40" />
				<Text className="text-base font-title text-triider-grayscale-gray1 text-center">
					Fill the code
				</Text>
			</View>
			<View></View>
			<View className="mt-10 items-center">
				<ButtonComponent label="Enter" />
			</View>
		</View>
	);
}
