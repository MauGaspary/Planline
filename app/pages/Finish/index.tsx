import { Image, Text, View } from 'react-native';
import Logo from '../../assets/images/Logo-vertical-original.png';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';

export default function Finish() {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	return (
		<View className="items-center bg-white flex-1">
			<Image source={Logo} className="mt-24" style={{ height: 250, resizeMode: 'contain' }}></Image>
			<Text className="text-2xl font-title mt-14 text-triider-grayscale-gray1 mb-56">
				Obrigado por participar!
			</Text>
			<Button label="Finalizar" onClick={() => navigation.navigate('Voting')} />
		</View>
	);
}
