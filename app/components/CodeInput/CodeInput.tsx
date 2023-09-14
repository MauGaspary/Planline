import { useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData, View } from 'react-native';

interface CodeProps {
	code: string;
}

export default function CodeInput({ code }: CodeProps) {
	const firstInput = useRef<null | TextInput>(null);
	const secondInput = useRef<null | TextInput>(null);
	const thirdInput = useRef<null | TextInput>(null);
	const fourthInput = useRef<null | TextInput>(null);

	const [otp, setOtp] = useState(['', '', '', '']);
	const newOtp = { ...otp };

	for (let i = 0; i < code.length; i++) {
		newOtp[i] = code[i];
	}

	useEffect(() => {
		code && setOtp(newOtp);
	}, [code]);

	const handleKeyPress = (
		inputNumber: number,
		event: NativeSyntheticEvent<TextInputKeyPressEventData>
	) => {
		if (event.nativeEvent.key === 'Backspace') {
			if (inputNumber >= 0) {
				switch (inputNumber) {
					case 0:
						firstInput.current?.focus();
						setOtp({ ...otp, [inputNumber]: '' });
						break;
					case 1:
						firstInput.current?.focus();
						setOtp({ ...otp, [inputNumber]: '' });
						break;
					case 2:
						secondInput.current?.focus();
						setOtp({ ...otp, [inputNumber]: '' });
						break;
					case 3:
						thirdInput.current?.focus();
						setOtp({ ...otp, [inputNumber]: '' });
						break;
					default:
						break;
				}
			}
		} else if (/^[0-9]$/.test(event.nativeEvent.key)) {
			setOtp({ ...otp, [inputNumber]: event.nativeEvent.key });
			if (inputNumber < 3) {
				switch (inputNumber) {
					case 0:
						secondInput.current?.focus();
						break;
					case 1:
						thirdInput.current?.focus();
						break;
					case 2:
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

	return (
		<View className=" flex flex-row space-x-4">
			<View className="shadow shadow-gray-400 rounded-md">
				<TextInput
					className=" text-2xl text-center bg-gray-300 rounded-md w-16 py-6"
					keyboardType="number-pad"
					maxLength={1}
					ref={firstInput}
					onChangeText={(text) => handleInputChange(0, text)}
					onKeyPress={(event) => handleKeyPress(0, event)}
					value={otp[0]}
				/>
			</View>
			<View className="shadow shadow-gray-400 rounded-md">
				<TextInput
					className="text-2xl text-center bg-gray-300  rounded-md w-16 py-6"
					keyboardType="number-pad"
					maxLength={1}
					ref={secondInput}
					onChangeText={(text) => handleInputChange(1, text)}
					onKeyPress={(event) => handleKeyPress(1, event)}
					value={otp[1]}
				/>
			</View>
			<View className="shadow shadow-gray-400 rounded-md">
				<TextInput
					className="text-2xl text-center bg-gray-300 rounded-md w-16 py-6"
					keyboardType="number-pad"
					maxLength={1}
					ref={thirdInput}
					onChangeText={(text) => handleInputChange(2, text)}
					onKeyPress={(event) => handleKeyPress(2, event)}
					value={otp[2]}
				/>
			</View>
			<View className="shadow shadow-gray-400 rounded-md">
				<TextInput
					className="text-2xl text-center bg-gray-300 rounded-md w-16 py-6"
					keyboardType="number-pad"
					maxLength={1}
					ref={fourthInput}
					onChangeText={(text) => handleInputChange(3, text)}
					onKeyPress={(event) => handleKeyPress(3, event)}
					value={otp[3]}
				/>
			</View>
		</View>
	);
}
