import { NavigationContainer } from '@react-navigation/native';
import Finish from './pages/Finish';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Voting from './pages/Voting';
import Wait from './pages/Wait';
import GenericError from './pages/Error';
import SelectUser from './pages/SelectUser/SelectUser';
import Home from './pages/Home/Home';
import Scanner from './pages/Scanner';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
	Voting: undefined;
	Wait: { waitingTask: string };
	Finish: undefined;
	Error: { label: string };
	SelectUser: { code: string[] };
	Home: undefined | { code: string };
	Scanner: undefined;
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
				<Stack.Screen name="Home" component={Home} initialParams={{ code: '' }} />
				<Stack.Screen name="SelectUser" component={SelectUser} />
				<Stack.Screen name="Voting" component={Voting} />
				<Stack.Screen name="Wait" component={Wait} />
				<Stack.Screen name="Finish" component={Finish} />
				<Stack.Screen name="Error" component={GenericError} />
				<Stack.Screen name="Scanner" component={Scanner} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
