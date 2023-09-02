import { View, Text } from 'react-native';
import CardComponent from '../../components/CardComponent';
import ButtonComponent from '../../components/ButtonComponent';
import { useState } from 'react';

export default function Voting() {
	const [selectedCard, setSelectedCard] = useState('-1');

	const handleCardClick = (label: string) => {
		setSelectedCard(label);
	};

	return (
		<View className="items-center">
			<View className="rounded-b-3xl items-center h-60 w-full bg-white shadow shadow-gray-400">
				<Text className="mt-12 text-2xl">SPRINT TESTE</Text>
				<Text className="mt-8 text-lg text-[#FF6600]">STORY 01</Text>
				<Text className="mt-4 text-lg text-[#565656]">Resolver os bugs do boilerplate</Text>
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
		</View>
	);
}
