import { Text, View } from 'react-native';
import MemberCard from './components/MemberCard';

export default function App() {
	return (
		<View className="items-center">
			<View className="rounded-b-3xl items-center h-32 w-full bg-white shadow shadow-gray-400">
				<Text className="mt-8 text-lg text-[#FF6600]">Team Vue.js {'>'} React</Text>
				<Text className="mt-4 text-lg text-black">Please, select your user</Text>
			</View>
			<View className="flex-col mt-10 items-center w-80">
				<View className="mb-8">
					<MemberCard />
				</View>
				<MemberCard />
				<MemberCard />
			</View>
			<View className="mt-10 items-center">
				<MemberCard />
				<MemberCard />
			</View>
		</View>
	);
}
