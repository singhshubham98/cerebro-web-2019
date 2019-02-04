import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<nav className="navbar">
		<div className="container">
			<Link to="/">Home</Link>
			<Link to="/">About</Link>
			<Link to="/">Team</Link>
			<Link to="/">Timeline</Link>
			<Link to="/">Events</Link>
		</div>
	</nav>
);

export default Navbar;
