import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
	<nav className="navbar">
		<div className="container">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/team">Team</Link>
			<Link to="/timeline">Timeline</Link>
			<Link to="/events">Events</Link>
		</div>
	</nav>
);

export default Navbar;
