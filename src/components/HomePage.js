import React from 'react';

import Logo from '../img/logo.svg';

const HomePage = () => (
	<main className="homepage">
		<div className="homepage__logo-wrapper">
			<img src={Logo} alt="Logo" className="homepage__logo" />
		</div>
	</main>
);

export default HomePage;
