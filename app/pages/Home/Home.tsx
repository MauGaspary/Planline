import { Image, View, Text } from 'react-native';
import Logo from '../../assets/images/LogoLaranjaTriider.png';
import ButtonComponent from '../../components/Button';
import { TextInput } from 'react-native-gesture-handler';
import React, { useRef, useState } from 'react';

export default function Home() {
	const firstInput = useRef<null | TextInput>(null);
	const secondInput = useRef<null | TextInput>(null);
	const thirdInput = useRef<null | TextInput>(null);
	const fourthInput = useRef<null | TextInput>(null);

	const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '' });

	return (
		<View className="flex-1 bg-gray-200 flex-col items-center ">
			<View>
				<Image source={Logo} style={{ height: 200, resizeMode: 'contain' }} className="mt-40" />
				<Text className="text-base font-title text-triider-grayscale-gray1 text-center">
					Fill the code
				</Text>
			</View>
			<View className="flex flex-row bg-slate-500 space-x-6 my-5">
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
			<View className="mt-10 items-center">
				<ButtonComponent label="Enter" />
			</View>
		</View>
	);
}
