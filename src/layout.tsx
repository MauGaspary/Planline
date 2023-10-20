import SideMenu from './components/SideMenu';
import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<>
			<SideMenu />
			<div className="ml-64">
				<Outlet />
			</div>
		</>
	);
}

export default Layout;
