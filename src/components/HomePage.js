import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logo.svg';
import Facebook from '../img/facebook.svg';
import Instagram from '../img/instagram.svg';
import Twitter from '../img/twitter.svg';

const HomePage = () => (
	<main className="homepage">
		<div className="homepage__logo-wrapper">
			<img src={Logo} alt="Logo" className="homepage__logo" />
		</div>
		<div className="social-icons">
			<Link to="/">
				<img src={Facebook} alt="Facebook" className="social-icons__icon" />
			</Link>
			<Link to="/">
				<img src={Instagram} alt="Instagram" className="social-icons__icon" />
			</Link>
			<Link to="/">
				<img src={Twitter} alt="Twitter" className="social-icons__icon" />
			</Link>
		</div>
	</main>
);

export default HomePage;
