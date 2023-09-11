import { useRef, useState, useEffect } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData, View } from 'react-native';

export default function CodeInput() {
	const firstInput = useRef<null | TextInput>(null);
	const secondInput = useRef<null | TextInput>(null);
	const thirdInput = useRef<null | TextInput>(null);
	const fourthInput = useRef<null | TextInput>(null);

	const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });

	const handleKeyPress = (
		inputNumber: number,
		event: NativeSyntheticEvent<TextInputKeyPressEventData>
	) => {
		if (event.nativeEvent.key === 'Backspace') {
			if (inputNumber > 1) {
				switch (inputNumber) {
					case 2:
						firstInput.current?.focus();
						break;
					case 3:
						secondInput.current?.focus();
						break;
					case 4:
						thirdInput.current?.focus();
						break;
					default:
						break;
				}
			}
		} else if (/^[0-9]$/.test(event.nativeEvent.key)) {
			setOtp({ ...otp, [inputNumber]: event.nativeEvent.key });
			if (inputNumber < 4) {
				switch (inputNumber) {
					case 1:
						secondInput.current?.focus();
						break;
					case 2:
						thirdInput.current?.focus();
						break;
					case 3:
						fourthInput.current?.focus();
						break;
					default:
						break;
				}
			}
		}
	};

	const handleInputChange = (inputNumber: number, text: string) => {
		if (/^[0-9]$/.test(text)) {
			setOtp({ ...otp, [inputNumber]: text });
		}
	};

	useEffect(() => {
		firstInput.current?.focus();
	}, []);

	return (
		<View className="flex flex-row space-x-4">
			<View className="rounded-md">
				<TextInput
					className="text-2xl text-center px-7 py-5 bg-gray-300 rounded-md w-16 "
					keyboardType="number-pad"
					maxLength={1}
					ref={firstInput}
					onChangeText={(text) => handleInputChange(1, text)}
					onKeyPress={(event) => handleKeyPress(1, event)}
					value={otp[1]}
				/>
			</View>
			<View className="rounded-md bg-orange-300">
				<TextInput
					className="text-2xl text-center px-7 py-5 bg-gray-300 rounded-md w-16"
					keyboardType="number-pad"
					maxLength={1}
					ref={secondInput}
					onChangeText={(text) => handleInputChange(2, text)}
					onKeyPress={(event) => handleKeyPress(2, event)}
					value={otp[2]}
				/>
			</View>
			<View className="rounded-md">
				<TextInput
					className="text-2xl text-center px-7 py-5 bg-gray-300 rounded-md w-16"
					keyboardType="number-pad"
					maxLength={1}
					ref={thirdInput}
					onChangeText={(text) => handleInputChange(3, text)}
					onKeyPress={(event) => handleKeyPress(3, event)}
					value={otp[3]}
				/>
			</View>
			<View className="rounded-md">
				<TextInput
					className="text-2xl text-center px-7 py-5 bg-gray-300 rounded-md w-16"
					keyboardType="number-pad"
					maxLength={1}
					ref={fourthInput}
					onChangeText={(text) => handleInputChange(4, text)}
					onKeyPress={(event) => handleKeyPress(4, event)}
					value={otp[4]}
				/>
			</View>
		</View>
	);
}
