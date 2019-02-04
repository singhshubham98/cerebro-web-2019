import React from 'react';
import { Link } from 'react-router-dom';

import Facebook from '../img/facebook.svg';
import Instagram from '../img/instagram.svg';
import Twitter from '../img/twitter.svg';

const Social = () => (
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
);

export default Social;
