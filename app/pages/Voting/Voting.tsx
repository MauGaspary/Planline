import { Text, View } from 'react-native';
import CardComponent from '../../components/Card';
import ButtonComponent from '../../components/Button';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Voting() {
	const [selectedCard, setSelectedCard] = useState('-1');

	const handleCardClick = (label: string) => {
		setSelectedCard(label);
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
				<CardComponent label="1" isSelected={selectedCard === '1'} onClick={handleCardClick} />
				<CardComponent label="2" isSelected={selectedCard === '2'} onClick={handleCardClick} />
				<CardComponent label="3" isSelected={selectedCard === '3'} onClick={handleCardClick} />
			</View>
			<View className="flex-row mt-10 justify-between w-80">
				<CardComponent label="5" isSelected={selectedCard === '5'} onClick={handleCardClick} />
				<CardComponent label="8" isSelected={selectedCard === '8'} onClick={handleCardClick} />
				<CardComponent label="13" isSelected={selectedCard === '13'} onClick={handleCardClick} />
			</View>
			<View className="mt-10 items-center">
				<ButtonComponent label="Next" />
				<CardComponent label="" isSelected={selectedCard === ''} onClick={handleCardClick} />
			</View>
			<StatusBar style="inverted" />
		</View>
	);
}
