import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Logo from '../../assets/images/SimboloTriiderlaranja.png';
import MemberCard from '../../components/MemberCard';
import ButtonComponent from '../../components/Button';
import { useAppContext } from '../../hooks/useSessionContexts';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';

export default function SelectUser() {
	const { dispatch, state } = useAppContext();

	const session = state.session;
	const users = Object.entries(session?.users || {});
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

	const [selectedUserId, setSelectedUserId] = useState<string>('');

	function handleButtonClick() {
		dispatch({
			type: 'SET_USER',
			payload: { userId: selectedUserId, firebase_auth_id: selectedUserId },
		});
	}

	useEffect(() => {
		if (state.user) {
			navigation.replace('Voting');
		}
	}, [state.user]);

	return (
		<View className="items-center flex-1">
			<ImageBackground
				style={{
					width: 264,
					height: 288,
					justifyContent: 'center',
					alignItems: 'center',
					opacity: 0.4,
					position: 'absolute',
					top: '28%',
				}}
				source={Logo}
			/>
			<View className="rounded-b-3xl items-center h-40 w-full bg-white shadow shadow-gray-400 pt-10 ">
				<Text className="mt-8 text-lg text-triider-primary-orange1">Time Vue.js {'>'} React</Text>
				<Text className="mt-4 text-lg text-black">Por favor, selecione o usuário</Text>
			</View>
			<View className="flex-col mt-12 items-center flex h-80 ">
				<ScrollView showsVerticalScrollIndicator={false}>
					{users
						.filter((user) => !user[1].firebase_auth_id)
						.map(([userId, user]) => (
							<View key={userId} className="mb-6">
								<MemberCard
									name={user.name}
									role={user.level}
									isSelected={userId === selectedUserId}
									onClick={() => setSelectedUserId(userId)}
								/>
							</View>
						))}
				</ScrollView>
			</View>
			<View className="mt-16 justify-between h-32">
				<ButtonComponent label="Iniciar" onClick={handleButtonClick} />
				<ButtonComponent label="Voltar" variant="ghost" onClick={() => navigation.goBack()} />
			</View>
			<StatusBar style="inverted" />
		</View>
	);
}
