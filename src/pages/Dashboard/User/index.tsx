import Container from '../../../components/Container';
import { Select } from '../../../components/Select/Select';
import { useState } from 'react';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';

function User() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Container title="usuários">
			<InputHeader>
				<InputText placeholder="Nome" size="medium" isRequired={true} />

				<Select
					placeholder="Nível"
					options={[
						{ id: '1', name: 'Junior' },
						{ id: '2', name: 'Pleno' },
						{ id: '3', name: 'Senior' },
					]}
					handleSelect={() => {}}
					disabled={false}
					isOpen={isOpen}
					onToggle={() => {
						setIsOpen(!isOpen);
					}}
					width="32"
				/>
			</InputHeader>
		</Container>
	);
}

export default User;
