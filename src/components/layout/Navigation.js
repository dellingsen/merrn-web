import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from '../user/User'
import ChangePassword from '../user/ChangePassword'
import Users from '../user/Users'
import Header from './Header'
import NavBar from './NavBar'
import IndexPage from './IndexPage'
import ErrorPage from './ErrorPage'
import Can from '../../util/Can'
import Profile from '../profile/Profile'
import SecurityMgmt from '../security/SecurityMgmt'

class Navigation extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Router>
					<div>
						<NavBar />
						<br/><br/>
						<div className="container" role="main">

						  <Can do="read" on="IndexPage"><Route exact path='/indexPage' component={IndexPage} /></Can>
							<Can not do="read" on="IndexPage"><Route exact path='/indexPage' component={ErrorPage} /></Can>

						  <Can do="read" on="SecurityMgmt"><Route exact path='/securityMgmt' component={SecurityMgmt} /></Can>
							<Can not do="read" on="SecurityMgmt"><Route exact path='/securityMgmt' component={ErrorPage} /></Can>

						  <Can do="read" on="Profile"><Route exact path='/profile' component={Profile} /></Can>
							<Can not do="read" on="Profile"><Route exact path='/profile' component={ErrorPage} /></Can>
							
						  <Can do="read" on="User"><Route exact path='/createUser' component={User} /></Can>
							<Can not do="read" on="User"><Route exact path='/createUser' component={ErrorPage} /></Can>
							
						  <Can do="read" on="ChangePassword"><Route exact path='/changePassword/:userName' component={ChangePassword} /></Can>
							<Can not do="read" on="ChangePassword"><Route exact path='/changePassword/:userName' component={ErrorPage} /></Can>

						  <Can do="read" on="Users"><Route exact path='/users' component={Users} /></Can>
							<Can not do="read" on="Users"><Route exact path='/users' component={ErrorPage} /></Can>
						
						</div>
					</div>
				</Router>
			</div>
		);
	}
}

export default Navigation