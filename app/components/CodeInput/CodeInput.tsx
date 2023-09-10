import { useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

export default function CodeInput() {
	const firstInput = useRef<null | TextInput>(null);
	const secondInput = useRef<null | TextInput>(null);
	const thirdInput = useRef<null | TextInput>(null);
	const fourthInput = useRef<null | TextInput>(null);

	const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });
	return (
		<View className="flex flex-row space-x-4">
			<View className="rounded-md border">
				<TextInput
					className="text-2xl text-center px-5 py-3 bg-orange-500"
					keyboardType="number-pad"
					maxLength={1}
					ref={firstInput}
					onChangeText={(text) => {
						setOtp({ ...otp, 1: text });
						text && secondInput.current?.focus();
					}}
				/>
			</View>
			<View className="rounded-md border">
				<TextInput
					className="text-2xl text-center px-5 py-3 bg-orange-500"
					keyboardType="number-pad"
					maxLength={1}
					ref={secondInput}
					onChangeText={(text) => {
						setOtp({ ...otp, 2: text });
						text ? thirdInput.current?.focus() : firstInput.current?.focus();
					}}
				/>
			</View>
			<View className="rounded-md border">
				<TextInput
					className="text-2xl text-center px-5 py-3 bg-orange-500"
					keyboardType="number-pad"
					maxLength={1}
					ref={thirdInput}
					onChangeText={(text) => {
						setOtp({ ...otp, 3: text });
						text ? fourthInput.current?.focus() : secondInput.current?.focus();
					}}
				/>
			</View>
			<View className="rounded-md border">
				<TextInput
					className="text-2xl text-center px-5 py-3 bg-orange-500"
					keyboardType="number-pad"
					maxLength={1}
					ref={fourthInput}
					onChangeText={(text) => {
						setOtp({ ...otp, 4: text });
						!text && thirdInput.current?.focus();
					}}
				/>
			</View>
		</View>
	);
}
