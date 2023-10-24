import Container from '../../../components/Container';

function Organization() {
	// Consume the API to get the organization
	// const { data: organization, isLoading: isLoadingOrganization, request: getOrganization } = useGet<InfoBody[]>();

	// useEffect(() => {
	// 	getOrganization('/Organization/info');
	// }, []);

	return <Container title="organizações"></Container>;
}

export default Organization;
