import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import coffee from '../../assets/images/coffee.png';

interface CardProps {
	label: string;
	isSelected: boolean;
	onClick: (label: string) => void;
}

export default function Card({ label, isSelected, onClick }: CardProps) {
	let style = '';
	let textStyle = '';
	let styleBtn = '';

	const handlePress = () => {
		if (label === '') {
			onClick('-1');
		} else {
			onClick(label);
		}
	};

	const commonStyles =
		'rounded-2xl h-32 w-24 items-center justify-center bg-white shadow shadow-gray-400';

	const selectedStyles = isSelected
		? `${commonStyles} border-4 border-triider-primary-orange1`
		: commonStyles;

	textStyle = 'text-lg text-triider-primary-orange1 font-bold';

	styleBtn = isSelected
		? `${commonStyles} h-14 w-72 mb-6 border-4 border-triider-primary-orange1`
		: `${commonStyles} h-14 w-72 mb-6`;

	style = selectedStyles;

	if (label !== '') {
		return (
			<TouchableOpacity className={style} onPress={handlePress}>
				<Text className={textStyle}>{label}</Text>
			</TouchableOpacity>
		);
	} else {
		return (
			<TouchableOpacity className={styleBtn} onPress={handlePress}>
				<Image source={coffee}></Image>
			</TouchableOpacity>
		);
	}
}
