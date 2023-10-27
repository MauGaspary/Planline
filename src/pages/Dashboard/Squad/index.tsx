import Container from '../../../components/Container';
import { InputHeader } from '../../../components/InputHeader/Index';
import { InputText } from '../../../components/InputText/Index';

function Squad() {
	return (
		<Container title="squads">
			<InputHeader>
				<InputText placeholder="Nome" size="medium" isRequired={true} />
			</InputHeader>
		</Container>
	);
}

export default Squad;
