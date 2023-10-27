import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Game from './pages/Game';
import Sprint from './pages/Dashboard/Sprint';
import Project from './pages/Dashboard/Project';
import Organization from './pages/Dashboard/Organization';
import Squad from './pages/Dashboard/Squad';
import User from './pages/Dashboard/User';
import Resume from './pages/Resume';
import './styles/globals.css';
import { ResumeProvider } from './contexts/ResumeInfoContext';
import Layout from './layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ResumeProvider>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/dashboard/sprints" element={<Sprint />} />
					<Route path="/dashboard/projects" element={<Project />} />
					<Route path="/dashboard/orgs" element={<Organization />} />
					<Route path="/dashboard/squads" element={<Squad />} />
					<Route path="/dashboard/users" element={<User />} />
					<Route path="/game" element={<Game />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</ResumeProvider>
);
