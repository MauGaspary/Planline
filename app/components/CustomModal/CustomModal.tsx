import { Modal, View, Text } from 'react-native';
import Button from '../Button';

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
			animationType="fade"
			visible={isVisible}
			onRequestClose={() => onClose()}
		>
			<View
				className="flex-1 justify-center items-center"
				style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
			>
				<View className="bg-white rounded-lg max-w-xs border-triider-primary-orange-dark border-2 flex items-center">
					<Text className="text-center mx-4 mt-5 text-2xl font-body">{sprintName}</Text>
					<Text className="mt-4 mx-4 text-lg text-triider-primary-orange1">{story}</Text>
					<Text className="mt-4 mb-6 mx-4 text-lg text-triider-grayscale-gray1">{task}</Text>
					<View className="mb-5 mx-4">
						<Button
							label="Fechar"
							onClick={() => {
								onClose();
							}}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}
