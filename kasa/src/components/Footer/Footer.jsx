import './footer.scss';
import Logo from '../../assets/img/Footer/Logo.png'

const Footer = () => {
	return (
		<footer className='footer'>
			<img src={Logo} alt="Kasa - agence de location d'appartements entre particuliers" />
			<p className='footer_copyright'>© 2020 Kasa. All rights reserved</p>
		</footer>
	);
};

export default Footer;