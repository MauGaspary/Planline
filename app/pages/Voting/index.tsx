import { Text, View } from 'react-native';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';
import { ref, set } from 'firebase/database';
import { useRealtimeDatabase } from '../../services/useFirebase';

export default function Voting() {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const route = useRoute();

	const { userName } = route.params as { userName: string };
	const { code } = route.params as { code: string };

	const database = useRealtimeDatabase();

	const [selectedCard, setSelectedCard] = useState('-1');
	const handleCardClick = (label: string) => {
		setSelectedCard(label);
	};

	const handleButtonClick = () => {
		set(ref(database, `sessions/${code}`), { users: { 1: { name: userName } } });
		navigation.navigate('Wait');
	};

	return (
		<View className="items-center bg-white flex-1">
			<View className="rounded-b-3xl items-center flex w-full bg-white shadow shadow-gray-400">
				<Text className="mt-10 text-2xl font-body">SPRINT TESTE</Text>
				<Text className="mt-8 text-lg text-triider-primary-orange1">STORY 01</Text>
				<Text className="mt-4 mb-6 text-lg text-triider-grayscale-gray1">
					Resolver os bugs do boilerplate
				</Text>
			</View>
			<View className="flex-row mt-10 justify-between w-80">
				<Card label="1" isSelected={selectedCard === '1'} onClick={handleCardClick} />
				<Card label="2" isSelected={selectedCard === '2'} onClick={handleCardClick} />
				<Card label="3" isSelected={selectedCard === '3'} onClick={handleCardClick} />
			</View>
			<View className="flex-row mt-10 justify-between w-80">
				<Card label="5" isSelected={selectedCard === '5'} onClick={handleCardClick} />
				<Card label="8" isSelected={selectedCard === '8'} onClick={handleCardClick} />
				<Card label="13" isSelected={selectedCard === '13'} onClick={handleCardClick} />
			</View>
			<View className="mt-10 items-center">
				<Button label="Próximo" onClick={handleButtonClick} />
				<Card label="" isSelected={selectedCard === ''} onClick={handleCardClick} />
			</View>
		</View>
	);
}
