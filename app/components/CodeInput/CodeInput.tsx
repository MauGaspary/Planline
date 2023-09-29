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

	const [otp, setOtp] = useState(['', '', '', '']);

	useEffect(() => {
		setOtp([
			code.substring(0, 1),
			code.substring(1, 2),
			code.substring(2, 3),
			code.substring(3, 4),
		]);
	}, [code]);

	pullCode(otp);

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
