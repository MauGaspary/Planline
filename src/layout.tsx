import SideMenu from './components/SideMenu';

interface LayoutProps {
	children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
	console.log(children);
	return (
		<>
			<SideMenu />
			<div className="ml-64">{children}</div>
		</>
	);
}

export default Layout;
