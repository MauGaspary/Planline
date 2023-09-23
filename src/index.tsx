import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CardsWithGames from './pages/CardsWithGames';
import Home from './pages/Home';
import Error from './pages/Error';
import Sprint from './pages/Dashboard/Sprint';
import Project from './pages/Dashboard/Project';
import Organization from './pages/Dashboard/Organization';
import Squad from './pages/Dashboard/Squad';
import User from './pages/Dashboard/User';
import Resume from './pages/Resume';
import './styles/globals.css';
import Upload from './pages/Upload';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Routes>
			<Route path="" element={<Home />} />
			<Route path="/dashboard/sprints" element={<Sprint />} />
			<Route path="/dashboard/projects" element={<Project />} />
			<Route path="/dashboard/orgs" element={<Organization />} />
			<Route path="/dashboard/squads" element={<Squad />} />
			<Route path="/dashboard/users" element={<User />} />
			<Route path="/resume" element={<Resume />} />
			<Route path="/upload" element={<Upload />} />
			<Route path="*" element={<Error />} />
			<Route path="/cards" element={<CardsWithGames />} />
		</Routes>
	</BrowserRouter>
);
