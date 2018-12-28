import React from 'react';
import {
	Navbar,
	Nav,
	NavItem,
	NavDropdown,
	MenuItem
} from 'react-bootstrap'

class NavBar extends React.Component {

	constructor() {
		super();
		this.state = {
		};
	}

	signOut() {
		sessionStorage.removeItem("token")
		sessionStorage.removeItem("userId")
  	sessionStorage.removeItem('userToken');
		window.location.reload()
	}
	
	renderGreeting() {
		const userId = sessionStorage.getItem("userId")
			return (
			<NavDropdown eventKey={6} title={`Welcome: ${userId}`} id="basic-nav-dropdown">
				<MenuItem eventKey={6.1} href={"/profile"}>Settings</MenuItem>
				<MenuItem eventKey={6.2} href={`/changePassword/${userId}`}>Change Password</MenuItem>
				<MenuItem divider />
				<MenuItem eventKey={6.3} onClick={() => this.signOut()}>Sign Out</MenuItem>
			</NavDropdown>
		);
	}

	render() {	

		return (
			<Navbar> 
				<Navbar.Header>
					<img alt="D3Insights" src="/images/background.png" />
				</Navbar.Header>
				<Nav className="nav-bar-text">
					<NavItem eventKey={1} href="/indexPage">Welcome</NavItem>
					<NavItem eventKey={2} href="/securityMgmt">Security</NavItem>
					<NavItem eventKey={3} href="/createUser">Create User</NavItem>
					<NavItem eventKey={4} href="/users">Users</NavItem>
				</Nav>
				<Nav className="nav-bar-text" pullRight>
					<NavItem eventKey={5} href="/profile">Profile</NavItem>
					{this.renderGreeting()}
					<NavItem eventKey={5.1}></NavItem>
				</Nav>
			</Navbar>
		)
	}
}

export default NavBar;