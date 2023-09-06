import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import coffeeWhite from '../assets/images/coffee-white.png';
import coffee from '../assets/images/coffee.png';

interface CardProps {
	label: string;
	isSelected: boolean;
	onClick: (label: string) => void;
}

export default function CardComponent({ label, isSelected, onClick }: CardProps) {
	let style = '';
	let textStyle = '';
	let imgStyle;
	let styleBtn = '';

	const handlePress = () => {
		onClick(label);
	};

	isSelected
		? ((style =
				'rounded-2xl h-[124] w-[90] items-center justify-center bg-[#FF6600] shadow shadow-gray-400'),
		  (textStyle = 'text-lg text-white font-bold'),
		  (imgStyle = coffeeWhite),
		  (styleBtn =
				'rounded-2xl h-[58] w-[320] items-center justify-center bg-[#FF6600] shadow shadow-gray-400 mt-6'))
		: ((style =
				'rounded-2xl h-[124] w-[90] items-center justify-center bg-white shadow shadow-gray-400'),
		  (textStyle = 'text-lg text-[#FF6600] font-bold'),
		  (imgStyle = coffee),
		  (styleBtn =
				'rounded-2xl h-[58] w-[320] items-center justify-center bg-white shadow shadow-gray-400 mt-6'));

	if (label !== '') {
		return (
			<TouchableOpacity className={style} onPress={handlePress}>
				<Text className={textStyle}>{label}</Text>
			</TouchableOpacity>
		);
	} else {
		return (
			<TouchableOpacity className={styleBtn} onPress={handlePress}>
				<Image source={imgStyle}></Image>
			</TouchableOpacity>
		);
	}
}
