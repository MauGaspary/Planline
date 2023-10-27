import { useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData, View } from 'react-native';

interface CodeProps {
	pullCode: (arg: string[]) => void;
	code: string;
}

export default function CodeInput({ pullCode, code }: CodeProps) {
	const firstInput = useRef<null | TextInput>(null);
	const secondInput = useRef<null | TextInput>(null);
	const thirdInput = useRef<null | TextInput>(null);
	const fourthInput = useRef<null | TextInput>(null);

	const [otp, setOtp] = useState<string[]>(['', '', '', '']);

	useEffect(() => {
		if (code.length === 4) setOtp([code[0], code[1], code[2], code[3]]);
	}, [code]);

	useEffect(() => {
		pullCode(otp);
	}, [otp]);

	const handleKeyPress = (
		inputNumber: number,
		event: NativeSyntheticEvent<TextInputKeyPressEventData>
	) => {
		if (event.nativeEvent.key === 'Backspace') {
			if (inputNumber >= 0) {
				const newOtp = [...otp];

				switch (inputNumber) {
					case 0:
						firstInput.current?.focus();
						newOtp[inputNumber] = '';
						setOtp(newOtp);
						break;
					case 1:
						firstInput.current?.focus();
						newOtp[inputNumber] = '';
						setOtp(newOtp);
						break;
					case 2:
						secondInput.current?.focus();
						newOtp[inputNumber] = '';
						setOtp(newOtp);
						break;
					case 3:
						thirdInput.current?.focus();
						newOtp[inputNumber] = '';
						setOtp(newOtp);
						break;
					default:
						break;
				}
			}
		} else if (/^[0-9]$/.test(event.nativeEvent.key)) {
			const newOtp = [...otp];

			newOtp[inputNumber] = event.nativeEvent.key;

			setOtp(newOtp);
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

	return (
		<View className=" flex flex-row space-x-4">
			<View className="shadow shadow-gray-400 rounded-md">
				<TextInput
					className=" text-2xl text-center bg-gray-300 rounded-md w-16 py-6"
					keyboardType="number-pad"
					maxLength={1}
					ref={firstInput}
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
					onKeyPress={(event) => handleKeyPress(3, event)}
					value={otp[3]}
				/>
			</View>
		</View>
	);
}
