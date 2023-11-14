import { Text, View } from 'react-native';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';
import { CurrentUser, Game, useAppContext } from '../../hooks/useSessionContexts';
import { vote } from '../../services/votes';

export default function Voting() {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const { state } = useAppContext();

	if (!state.game || !state.user) {
		return (
			<>
				<Text>Carregando...</Text>
			</>
		);
	}

	const game = state.game as Game;
	const user = state.user as CurrentUser;

	const currentStory = game?.stories[game?.current_story];
	const currentTask = currentStory?.tasks[game?.current_task];

	const [selectedCard, setSelectedCard] = useState('');
	const handleCardClick = (label: string) => {
		setSelectedCard(label);
	};

	const handleButtonClick = async () => {
		await vote(state.sessionId ?? 0, game.current_task, user.id, +selectedCard);

		navigation.replace('Wait', { waitingTask: game?.current_task || '' });
	};

	return (
		<View className="items-center flex-1">
			<View className="rounded-b-3xl items-center flex w-full bg-white shadow shadow-gray-400">
				<Text className="mt-10 text-2xl font-body">{game.sprint_name}</Text>
				<Text className="mt-8 text-lg text-triider-primary-orange1">
					{currentStory?.name || 'Não há histórias nessa sprint'}
				</Text>
				<Text className="mt-4 mb-6 text-lg text-triider-grayscale-gray1">
					{currentTask?.description || 'Não há tarefas nessa história'}
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
				<Card label="" isSelected={selectedCard === '-1'} onClick={handleCardClick} />
			</View>
		</View>
	);
}
