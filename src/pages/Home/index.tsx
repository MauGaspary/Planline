import SideMenu from '../../components/sideMenu';

function Home() {
	return (
		<div className="bg-gray-900 h-full">
			<h1 className="text-center text-triider-primary-orange1">Home!</h1>
			<SideMenu label="çaçaça" linkTo="dashboard" />
			<SideMenu label="teste2" linkTo="users" />
			<SideMenu label="teste3" linkTo="users" />
			<SideMenu label="teste4" linkTo="users" />
			<SideMenu label="teste5" linkTo="users" />
		</div>
	);
}

export default Home;
