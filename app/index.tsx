import { ImageBackground, ScrollView, Text, View } from 'react-native';
import MemberCard from './components/MemberCard';
import ButtonComponent from './components/Button';
import { StatusBar } from 'expo-status-bar';
import Logo from './assets/images/SimboloTriiderlaranja.png';

const users = [
	{
		id: 1,
		name: 'Cássio Trindade',
		role: 'Estagiário',
	},
	{
		id: 2,
		name: 'Augusto Linhares',
		role: 'Senior developer',
	},
	{
		id: 3,
		name: 'Leticia Reis',
		role: 'UI/UX Designer',
	},
	{
		id: 4,
		name: 'John Doe',
		role: 'Junior developer',
	},
	{
		id: 5,
		name: 'John Doe',
		role: 'Senior developer',
	},
	{
		id: 6,
		name: 'John Doe',
		role: 'Senior developer',
	},
	{
		id: 7,
		name: 'John Doe',
		role: 'Junior developer',
	},
];

export default function App() {
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
			<View className="rounded-b-3xl items-center h-44 w-full bg-white shadow shadow-gray-400 pt-10 mb-4">
				<Text className="mt-8 text-lg text-triider-primary-orange1">Team Vue.js {'>'} React</Text>
				<Text className="mt-4 text-lg text-black">Please, select your user</Text>
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
				<ButtonComponent label="Start" />
				<ButtonComponent label="Back" variant="ghost" />
			</View>
			<StatusBar style="inverted" />
		</View>
	);
}
