import { Image, Text, View } from 'react-native';
import Logo from '../../assets/images/Logo-vertical-original.png';
import { useAppContext } from '../../hooks/useSessionContexts';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';
import { useEffect } from 'react';

export default function Wait() {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const router = useRoute();
	const { state } = useAppContext();

	const game = state.game;
	const { waitingTask } = router.params as { waitingTask: string };

	useEffect(() => {
		if (game?.current_task !== waitingTask) {
			if (!game?.current_task) {
				navigation.replace('Finish');
				return;
			}
			navigation.replace('Voting');
			return;
		}
	}, [game?.current_task]);

	return (
		<View className="items-center flex-1">
			<Image source={Logo} className="mt-24" style={{ height: 250, resizeMode: 'contain' }}></Image>
			<Text className="text-2xl font-title mt-14 text-triider-grayscale-gray1 text-center ">
				Aguarde alguns minutos {'\n'} até o próximo round!
			</Text>
		</View>
	);
}
