// import { Text, View } from 'react-native';
// import Voting from './pages/Voting/Voting';
import { NavigationContainer } from '@react-navigation/native';
import FinishScreen from './pages/FinishScreen/FinishScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Voting from './pages/Voting/Voting';
import WaitScreen from './pages/WaitScreen/WaitScreen';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
	Voting: undefined;
	Wait: undefined;
	Finish: undefined;
};

export default function App() {
	return (
		// <View className="bg-gray-900 flex-1 items-center justify-center">
		// 	<Text className="text-white text-4xl">Hello World!!!</Text>
		// </View>
		// <Voting />
		<NavigationContainer independent={true}>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					gestureEnabled: false,
				}}
			>
				<Stack.Screen name="Voting" component={Voting} />
				<Stack.Screen name="Wait" component={WaitScreen} />
				<Stack.Screen name="Finish" component={FinishScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
