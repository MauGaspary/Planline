import { Modal, View, Text, TouchableOpacity } from 'react-native';

interface CustomModalProps {
	isVisible: boolean;
	onClose: () => void;
	sprintName: string;
	story?: string;
	task?: string;
}

export default function CustomModal({
	isVisible,
	onClose,
	sprintName,
	story,
	task,
}: CustomModalProps) {
	return (
		<Modal
			transparent={true}
			animationType="slide"
			visible={isVisible}
			onRequestClose={() => onClose()}
		>
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					backgroundColor: 'rgba(0, 0, 0, 0.5)',
				}}
			>
				<View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
					<Text className="mt-8 text-2xl font-body">{sprintName}</Text>
					<Text className="mt-4 mx-7 text-lg text-triider-primary-orange1">{story}</Text>
					<Text className="mt-4 mx-2 mb-6 text-lg text-triider-grayscale-gray1">{task}</Text>
					<TouchableOpacity onPress={() => onClose()}>
						<Text>Close Modal</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}
