import { Image, View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Logo from '../../assets/images/LogoLaranjaTriider.png';
import ButtonComponent from '../../components/Button';

import CodeInput from '../../components/CodeInput/CodeInput';

export default function Home() {
	const handleScreenPress = () => {
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback onPress={handleScreenPress}>
			<View className="flex-1 bg-gray-200 flex-col items-center ">
				<View>
					<Image source={Logo} style={{ height: 200, resizeMode: 'contain' }} className="mt-40" />
					<Text className="text-base font-title text-triider-grayscale-gray1 text-center">
						Preencha o código
					</Text>
				</View>
				<View className=" bg-slate-500 space-x-6 my-5">
					<CodeInput />
				</View>
				<View className="mt-10 items-center absolute bottom-14">
					<ButtonComponent label="Enter" />
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
