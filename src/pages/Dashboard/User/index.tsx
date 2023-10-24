import Container from '../../../components/Container';
import GenericTable from '../../../components/GenericTable';

function User() {
	const columns = ['Nome', 'Email', 'Nível', 'Squads'];

	return (
		<Container title="usuários">
			<GenericTable columns={columns} />
		</Container>
	);
}

export default User;
