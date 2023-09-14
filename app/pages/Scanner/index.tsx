import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { RootStackParamList } from '../..';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export default function App() {
	const [hasPermission, setHasPermission] = useState<boolean>(false);
	const [scanned, setScanned] = useState<boolean>(false);
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		};

		getBarCodeScannerPermissions();
	}, []);

	const handleBarCodeScanned = () => {
		setScanned(true);
		navigation.navigate({
			name: 'Home',
			params: { code: '1234' },
			merge: true,
		});
	};

	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<View className="flex-1 justify-center flex-col">
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
				barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
			/>
		</View>
	);
}
