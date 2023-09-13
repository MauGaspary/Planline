import { View, Text, Image } from 'react-native';
import SadTriider from '../../assets/images/sadOrangeTriider.png';
import Button from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function GenericError() {
	const navigation = useNavigation();
	const route = useRoute();
	const { label } = route.params as { label: string };
	return (
		<View className="items-center bg-white flex-1">
			<Image source={SadTriider} className="mt-24" style={{ height: 250, resizeMode: 'contain' }} />
			<Text className="text-2xl font-body mt-8 mb-56">{label}</Text>
			<Button label="Voltar" onClick={() => navigation.goBack()} />
		</View>
	);
}
