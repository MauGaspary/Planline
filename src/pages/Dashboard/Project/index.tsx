import Container from '../../../components/Container';

function Project() {
	// Consume the API to get the projects
	// const { data: projects, isLoading: isLoadingProjects, request: getProjects } = useGet<InfoBody[]>();

	// useEffect(() => {
	// 	getProjects('/projects/info');
	// }, []);
	return <Container title="projetos"></Container>;
}

export default Project;
