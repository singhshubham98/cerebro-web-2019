import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drawerOut: false,
		}
	}

	showDrawer = () => {
		this.setState({
			drawerOut: true
		})
		
		try {
			document.getElementById('user-profile-main').style.zIndex = -1;
			document.getElementById('social-icons').style.zIndex = -1;
		} catch {}
		
	}

	hideDrawer = () => {
		this.setState({
			drawerOut: false
		})
		try {
			document.getElementById('user-profile-main').style.zIndex = 0;
			document.getElementById('social-icons').style.zIndex = 2000;
		} catch {}	
	}

	render() {
		return (
			<nav className="navbar">
				<div id="main-navbar" className="container">
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/team">Team</NavLink>
					<NavLink to="/timeline">Timeline</NavLink>
					<NavLink to="/events">Events</NavLink>
          			<NavLink to="/dashboard">My Events</NavLink>
				</div>
				<div id="drawer-button" className="container">
					<span id='drawer-button-span' onClick={this.showDrawer}><i class="fas fa-bars"></i></span>
				</div>

				<div id="black-background" className={this.state.drawerOut ? 'black-background-visible' : null}  onClick={this.hideDrawer}></div>

				<div id="drawer" className={this.state.drawerOut ? 'drawer-visible' : null}>
					<NavLink onClick={this.hideDrawer} exact to="/">Home</NavLink>
					<NavLink onClick={this.hideDrawer} to="/about">About</NavLink>
					<NavLink onClick={this.hideDrawer} to="/team">Team</NavLink>
					<NavLink onClick={this.hideDrawer} to="/timeline">Timeline</NavLink>
					<NavLink onClick={this.hideDrawer} to="/events">Events</NavLink>
					<NavLink onClick={this.hideDrawer} to="/dashboard">My Events</NavLink>
				</div>
			</nav>
		);
	}	
}

export default Navbar;
