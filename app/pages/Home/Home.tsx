import { Image, View, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Logo from '../../assets/images/LogoLaranjaTriider.png';
import Button from '../../components/Button';

import CodeInput from '../../components/CodeInput/CodeInput';
import { RootStackParamList } from '../..';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useAppContext } from '../../hooks/useSessionContexts';

export default function Home() {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const route = useRoute();
	const { code } = route.params as { code: string };

	const handleScreenPress = () => {
		Keyboard.dismiss();
	};

	let inputCode = [''];

	const pullCode = (data: string[]) => {
		inputCode = data;
	};

	const { dispatch, state } = useAppContext();

	useEffect(() => {
		if (state.session) {
			navigation.navigate('SelectUser');
		}
	}, [state.session]);

	function handleButtonClick() {
		console.log(inputCode);

		if (inputCode.length !== 4) return;
		const code = inputCode.join('');

		dispatch({ type: 'SET_SESSION_ID', payload: +code });
	}

	return (
		<TouchableWithoutFeedback onPress={handleScreenPress}>
			<View className="flex-1 flex-col items-center ">
				<View>
					<Image source={Logo} style={{ height: 200, resizeMode: 'contain' }} className="mt-16" />
					<Text className="text-base font-title text-triider-grayscale-gray1 text-center">
						Preencha o código
					</Text>
				</View>
				<View className="space-x-6 mt-16">
					{/* 
					Criado um math.random para renderizar sempre que o code alterar da rota, pois o parametro continuava o mesmo
					Talvez criar um contexto resolva.
					*/}
					<CodeInput pullCode={pullCode} code={code} key={Math.random()} />
				</View>
				<View className="justify-between mt-36 h-32">
					<Button label="Entrar" variant="primary" onClick={handleButtonClick} />
					<Button
						label="Scanear QRCode"
						variant="ghost"
						onClick={() => navigation.navigate('Scanner')}
					/>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}
