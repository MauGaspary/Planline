import { Stack } from 'expo-router';
import '../globals.css';
import { Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
import { SessionProvider } from './hooks/useSessionContexts';

export default function RootLayout() {
	const [fontsLoades, fontError] = useFonts({
		Roboto_700Bold,
		Roboto_400Regular,
	});

	if (!fontsLoades && !fontError) {
		return null;
	}
	return (
		<SessionProvider>
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: { backgroundColor: 'transparent' },
					animation: 'fade',
				}}
			>
				<Stack.Screen name="index" />
			</Stack>
		</SessionProvider>
	);
}
