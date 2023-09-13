import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import coffeeWhite from '../../assets/images/coffee-white.png';
import coffee from '../../assets/images/coffee.png';

interface CardProps {
	label: string;
	isSelected: boolean;
	onClick: (label: string) => void;
}

export default function Card({ label, isSelected, onClick }: CardProps) {
	let style = '';
	let textStyle = '';
	let imgStyle;
	let styleBtn = '';

	const handlePress = () => {
		onClick(label);
	};

	isSelected
		? ((style =
				'rounded-2xl h-32 w-24 items-center justify-center bg-triider-primary-orange1 shadow shadow-gray-400'),
		  (textStyle = 'text-lg text-white font-bold'),
		  (imgStyle = coffeeWhite),
		  (styleBtn =
				'rounded-2xl h-14 w-72 items-center justify-center bg-triider-primary-orange1 shadow shadow-gray-400 mt-6'))
		: ((style =
				'rounded-2xl h-32 w-24 items-center justify-center bg-white shadow shadow-gray-400'),
		  (textStyle = 'text-lg text-triider-primary-orange1 font-bold'),
		  (imgStyle = coffee),
		  (styleBtn =
				'rounded-2xl h-14 w-72 items-center justify-center bg-white shadow shadow-gray-400 mt-6'));

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
