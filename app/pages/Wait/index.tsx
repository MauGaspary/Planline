import { Image, Text, View } from 'react-native';
import Logo from '../../assets/images/Logo-vertical-original.png';
import { useAppContext } from '../../hooks/useSessionContexts';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';

export default function Wait() {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const router = useRoute();
	const { state } = useAppContext();

	const session = state.session;
	const { waitingTask } = router.params as { waitingTask: string };

	if (!session) return null;

	if (session.current_task !== waitingTask) {
		navigation.navigate('Voting');
		return null;
	}

	return (
		<View className="items-center flex-1">
			<Image source={Logo} className="mt-24" style={{ height: 250, resizeMode: 'contain' }}></Image>
			<Text className="text-2xl font-title mt-14 text-triider-grayscale-gray1 text-center ">
				Aguarde alguns minutos {'\n'} até o próximo round!
			</Text>
		</View>
	);
}
