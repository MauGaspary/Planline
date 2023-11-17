import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Game from './pages/Game';
import History from './pages/History';
import Project from './pages/Dashboard/Project';
import Organization from './pages/Dashboard/Organization';
import Squad from './pages/Dashboard/Squad';
import User from './pages/Dashboard/User';
import './styles/globals.css';
import { ResumeProvider } from './contexts/ResumeInfoContext';
import Layout from './layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ResumeProvider>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard/projects" element={<Project />} />
					<Route path="/dashboard/orgs" element={<Organization />} />
					<Route path="/dashboard/squads" element={<Squad />} />
					<Route path="/dashboard/users" element={<User />} />
					<Route path="/game/:session_id" element={<Game />} />
					<Route path="/history" element={<History />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</ResumeProvider>
);
