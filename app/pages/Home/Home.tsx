import { Image, View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Logo from '../../assets/images/LogoLaranjaTriider.png';
import Button from '../../components/Button';

import CodeInput from '../../components/CodeInput/CodeInput';
import { RootStackParamList } from '../..';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Home() {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const route = useRoute();
	const { code } = route.params as { code: string };
	const handleScreenPress = () => {
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback onPress={handleScreenPress}>
			<View className="flex-1 flex-col items-center ">
				<View>
					<Image source={Logo} style={{ height: 200, resizeMode: 'contain' }} className="mt-40" />
					<Text className="text-base font-title text-triider-grayscale-gray1 text-center">
						Preencha o código
					</Text>
				</View>
				<View className="space-x-6 mt-16">
					<CodeInput code={code} />
				</View>
				<View className="justify-between mt-36 h-32">
					<Button
						label="Enter"
						variant="primary"
						onClick={() => navigation.navigate('SelectUser')}
					/>
					<Button
						label="Scan QRCode"
						variant="ghost"
						onClick={() => navigation.navigate('Scanner')}
					/>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
