import Container from '../../../components/Container';
import GenericTable from '../../../components/GenericTable';

function User() {
	return (
		<Container title="usuários">
			<GenericTable columns={3} />
		</Container>
	);
}

export default User;
