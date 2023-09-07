import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import './styles/globals.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<Error />} />
		</Routes>
	</BrowserRouter>
);
