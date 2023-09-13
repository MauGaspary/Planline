import { Image, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Logo from '../../assets/images/Logo-vertical-original.png';

export default function Wait() {
	return (
		<View className="items-center bg-white flex-1">
			<Image source={Logo} className="mt-24" style={{ height: 250, resizeMode: 'contain' }}></Image>
			<Text className="text-2xl font-title mt-14 text-triider-grayscale-gray1">
				Aguarde alguns minutos {'\n'} até o próximo round!
			</Text>
			<StatusBar style="inverted" />
		</View>
	);
}
