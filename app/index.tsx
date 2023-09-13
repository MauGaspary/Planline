import { NavigationContainer } from '@react-navigation/native';
import FinishScreen from './pages/Finish';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Voting from './pages/Voting';
import WaitScreen from './pages/Wait';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
	Voting: undefined;
	Wait: undefined;
	Finish: undefined;
};

export default function App() {
	return (
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
