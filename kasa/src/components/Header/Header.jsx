import './header.scss';
import Logo from '../../assets/img/HomeLogo.png'
import Navbar from '../Navbar/Navbar'

const Header = () => {
	return (
		<header className='header'>
			<h1>
				<img src={Logo} alt="locations d'appartements" />
			</h1>
			<Navbar />
		</header>
	);
};

export default Header;