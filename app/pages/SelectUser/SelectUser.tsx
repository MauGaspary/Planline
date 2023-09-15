import { ImageBackground, ScrollView, Text, View } from 'react-native';
import Logo from '../../assets/images/SimboloTriiderlaranja.png';
import MemberCard from '../../components/MemberCard';
import Button from '../../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../..';
import { useNavigation } from '@react-navigation/native';

const users = [
	{
		id: 1,
		name: 'Cássio Trindade',
		role: 'Estagiário',
	},
	{
		id: 2,
		name: 'Augusto Linhares',
		role: 'Desenvolvedor Senior',
	},
	{
		id: 3,
		name: 'Leticia Reis',
		role: 'UI/UX Designer',
	},
	{
		id: 4,
		name: 'John Doe',
		role: 'Desenvolvedor Junior',
	},
	{
		id: 5,
		name: 'John Doe',
		role: 'Desenvolvedor Senior',
	},
	{
		id: 6,
		name: 'John Doe',
		role: 'Desenvolvedor Senior',
	},
	{
		id: 7,
		name: 'John Doe',
		role: 'Desenvolvedor Junior',
	},
];

export default function SelectUser() {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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
					{users.map((user) => (
						<View key={user.id} className="mb-6">
							<MemberCard name={user.name} role={user.role} />
						</View>
					))}
				</ScrollView>
			</View>
			<View className="mt-16 justify-between h-32">
				<Button label="Start" onClick={() => navigation.navigate('Voting')} />
				<Button label="Back" variant="ghost" onClick={() => navigation.goBack()} />
			</View>
		</View>
	);
}
