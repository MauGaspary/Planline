// import { useEffect } from 'react';
import Container from '../../../components/Container';
// import { useGet } from '../../../hooks/useGet';

function Squad() {
	// Consume the API to get the squads
	// const { data: squads, isLoading: isLoadingSquads, request: getSquads } = useGet<InfoBody[]>();

	// useEffect(() => {
	// 	getSquads('/squads/info');
	// }, []);

	return <Container title="squads"></Container>;
}

export default Squad;
