import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from 'react/jsx-runtime';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
ReactDOM.createRoot(document.getElementById('root')).render(
	_jsx(BrowserRouter, {
		children: _jsxs(Routes, {
			children: [
				_jsx(Route, { path: '/', element: _jsx(Home, {}) }),
				_jsx(Route, { path: '*', element: _jsx(_Fragment, {}) }),
			],
		}),
	})
);
