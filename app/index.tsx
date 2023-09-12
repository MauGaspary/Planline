// import { Text, View } from 'react-native';
import GenericError from './pages/Error';
// import Voting from './pages/Voting/Voting';

export default function App() {
	return (
		// <View className="bg-gray-900 flex-1 items-center justify-center">
		// 	<Text className="text-white text-4xl">Hello World!!!</Text>
		// </View>
		// <Voting />
		<GenericError label="Failed to connect" />
	);
}
