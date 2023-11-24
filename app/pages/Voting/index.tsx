import { Text, TouchableOpacity, View } from 'react-native';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';
import { CurrentUser, Game, useAppContext } from '../../hooks/useSessionContexts';
import { vote } from '../../services/votes';
import CustomModal from '../../components/CustomModal/CustomModal';

export default function Voting() {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	const { state } = useAppContext();
	const [selectedCard, setSelectedCard] = useState('');
	const [isModalVisible, setModalVisible] = useState(false);

	useEffect(() => {
		if (game?.finished) {
			navigation.replace('Finish');
			return;
		}
	}, [state.game]);

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

	const handleCardClick = (label: string) => {
		setSelectedCard(label);
	};

	const handleButtonClick = async () => {
		await vote(state.sessionId ?? 0, game.current_task, user.id, +selectedCard);

		navigation.replace('Wait', { waitingTask: game?.current_task || '' });
	};

	const toggleModal = () => {
		setModalVisible(!isModalVisible);
	};

	return (
		<View className="flex justify-center items-center">
			<TouchableOpacity
				onPress={() => toggleModal()}
				className="rounded-b-3xl items-center flex w-full bg-white shadow shadow-gray-400"
			>
				<Text className="mt-14 text-md">Clique nesse card para ver mais informações!</Text>
				<Text
					numberOfLines={2}
					className="mt-3 mx-7 line-clamp-3 text-lg text-triider-primary-orange1"
				>
					{currentStory?.name || 'Não há histórias nessa sprint'}
				</Text>
				<Text className="mt-3 mx-2 mb-5 text-lg text-triider-grayscale-gray1">
					{currentTask?.description || 'Não há tarefas nessa história'}
				</Text>
			</TouchableOpacity>
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
				<Card label="" isSelected={selectedCard === '-1'} onClick={handleCardClick} />
				<Button
					disabled={selectedCard === '' ? true : false}
					label="Próximo"
					onClick={handleButtonClick}
				/>
			</View>

			<CustomModal
				sprintName={game.sprint_name}
				story={currentStory?.name}
				task={currentTask?.description}
				isVisible={isModalVisible}
				onClose={toggleModal}
			/>
		</View>
	);
}
