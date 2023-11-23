import Container from '../../components/Container';
import { InputHeader } from '../../components/InputHeader/Index';
import { InputText } from '../../components/InputText/Index';

function History() {
	return (
		<Container title="histórico">
			<InputHeader>
				<InputText value="" placeholder="Nome" size="medium" isRequired={true} />
			</InputHeader>
		</Container>
	);
}

export default History;
