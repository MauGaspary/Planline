import { ImageBackground, ScrollView, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import Logo from '../../assets/images/SimboloTriiderlaranja.png';
import MemberCard from '../../components/MemberCard';
import ButtonComponent from '../../components/Button';
import { useSession } from '../../hooks/useSessionContexts';

export default function SelectUser() {
	const { state } = useSession();
	const { users } = state;
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
							<MemberCard name={user.name} role={user.level} />
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
