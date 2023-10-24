// import { useEffect } from 'react';
import Container from '../../../components/Container';
// import { useGet } from '../../../hooks/useGet';

function User() {
	// Consume the API to get the users
	// const { data: users, isLoading: isLoadingUsers, request: getUsers } = useGet<InfoBody[]>();

	// useEffect(() => {
	// 	getUsers('/users/info');
	// }, []);

	return <Container title="usuários"></Container>;
}

export default User;
