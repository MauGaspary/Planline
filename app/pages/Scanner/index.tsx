import { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { RootStackParamList } from '../..';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

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

	const handleBarCodeScanned = ({ data }: { data: string }) => {
		setScanned(true);
		Number(data) <= 9999 && Number(data) >= Number('0000')
			? navigation.navigate({
					name: 'Home',
					params: { code: data },
					merge: true,
			  })
			: navigation.navigate('Error', { label: 'Código inválido' });
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
			<View className="items-center inset-x-0 bottom-32 absolute">
				<Button label="Voltar" onClick={() => navigation.goBack()} />
			</View>
		</View>
	);
}
