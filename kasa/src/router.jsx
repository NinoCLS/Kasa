import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/notFound';
import Accomodation from './pages/accomodation/Accomodation';
import About from './pages/about/About';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <NotFound />
	},
	{
		path: '/accomodation/:id',
		element: <Accomodation />,
		errorElement: <NotFound />
	},
	{
		path: '/about',
		element: <About />,
		errorElement: <NotFound />
	}
]);

export default router;