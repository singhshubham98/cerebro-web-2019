import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { signOut } from "../actions/authActions";


const Navbar = (props) => (
	<nav className="navbar">
		<div className="container">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/team">Team</Link>
			<Link to="/timeline">Timeline</Link>
			<Link to="/events">Events</Link>
			<Link to="/dashboard">My Events</Link>
			{props.auth ? (
				<button className='btn' onClick={props.signOut}>Sign Out</button>
			): (
				<SignIn />
			)}
		</div>
	</nav>
);

const mapStateToProps = ({ auth }) => {
	return { auth }
}

export default connect(mapStateToProps, { signOut })(Navbar);
