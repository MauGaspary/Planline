import SideMenu from './components/SideMenu';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
	children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
	const location = useLocation();
	const path = location.pathname;
	if (path.includes('/dashboard') || path === '/' || path === '/import') {
		return (
			<>
				<SideMenu />
				<div className="ml-64">{children}</div>
			</>
		);
	} else {
		return <>{children}</>;
	}
}

export default Layout;
