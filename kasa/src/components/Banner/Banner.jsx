import './banner.scss'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Banner = () => {
	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();

	// if user is on about page, set the state to true
	useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true)
		}
		// eslint-disable-next-line
	}, [])

	return (
		// if location == about, section className == banner_about
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
	);
};

export default Banner;