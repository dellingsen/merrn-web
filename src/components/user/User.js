import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateProfile } from '../../redux/actions/ProfileActions'

class User extends Component {

	constructor(props) {
		super(props)
		this.state = {
			firstName: "",
			lastName: "",
			userName: "",
			email: "",
			password: "",
			role: ""
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			firstName: nextProps.profile.firstName,
			lastName: nextProps.profile.lastName,
			email: nextProps.profile.email,
			role: nextProps.profile.role
		})
	}

	render() {

		const sendProfileUpdate = () => {
			var profile = {
				...this.state
			}
			this.props.updateProfile(profile)
			setTimeout(function () {
				window.location = '/users'
			}.bind(this), 1000)
		}

		const handleChange = evt => {
			this.setState({
				[evt.target.name]: evt.target.value
			})
		}
		
		return (
			<Grid>
				<Row>
					<Col sm={12}>
						<h4>Create new User Profile</h4>
					</Col>
				</Row>
				<Row>
					<Col sm={2}></Col>
					<Col sm={10}>
						<div className="profile">
							<div className="card">
								<div className="card-body">
									<div className="form-group">
										<label htmlFor="firstName">First Name</label>
										<input type="text" className="form-control" name="firstName" placeholder="" value={this.state.firstName} onChange={handleChange} />
									</div>
									<div className="form-group">
										<label htmlFor="lastName">Last Name</label>
										<input type="text" className="form-control" name="lastName" placeholder="" value={this.state.lastName} onChange={handleChange} />
									</div>
									<div className="form-group">
										<label htmlFor="userName">User Name</label>
										<input type="text" className="form-control" name="userName" placeholder="" value={this.state.userName} onChange={handleChange} />
									</div>
									<div className="form-group">
										<label htmlFor="lastName">Email</label>
										<input type="text" className="form-control" name="email" placeholder="" value={this.state.email} onChange={handleChange} />
									</div>
									<div className="form-group">
										<label htmlFor="lastName">Password</label>
										<input type="text" className="form-control" name="password" placeholder="" value={this.state.password} onChange={handleChange} />
									</div>
									<div className="form-group">
										<FormGroup >
											<label htmlFor="lastName">Role</label>
												<FormControl componentClass="select" placeholder="select" name="role" value={this.state.role}
													onChange={handleChange} >
													<option value=''>Select</option>
													<option key='Basic' value='BASIC'>Basic</option>
													<option key='Administrator' value='ADMINISTRATOR'>Administrator</option>
													<option key='Advanced' value='ADVANCED'>Advanced</option>
													<option key='Contractor' value='CONTRACTOR'>Contractor</option>
												</FormControl>
										</FormGroup>
									</div>

									<button className="btn btn-primary" onClick={() => sendProfileUpdate()}>Create</button>
									<br />
									<hr />
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

const mapStateToProps = store => ({
	profile: store.profile
})

const mapDispatchToProps = dispatch => ({
	updateProfile: (profile) => {
		dispatch(updateProfile(profile))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(User)