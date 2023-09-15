import { NavigationContainer } from '@react-navigation/native';
import Finish from './pages/Finish';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Voting from './pages/Voting';
import Wait from './pages/Wait';
import SelectUser from './pages/SelectUser/SelectUser';

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
				<Stack.Screen name="SelectUser" component={SelectUser} />
				<Stack.Screen name="Voting" component={Voting} />
				<Stack.Screen name="Wait" component={Wait} />
				<Stack.Screen name="Finish" component={Finish} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
