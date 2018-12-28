import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import { loadProfile, updateProfile } from '../../redux/actions/ProfileActions'

class Profile extends Component {

	constructor(props) {
		super(props)
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
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

	componentDidMount() {
		var userId = sessionStorage.getItem("userId")
		this.props.loadProfile(userId)
	}

	render() {

		const sendProfileUpdate = () => {
			var profile = {
				...this.state
			}
			this.props.updateProfile(profile)
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
						<h4><center>Update current user Profile</center></h4>
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
										<label htmlFor="lastName">Email</label>
										<input type="text" className="form-control" name="email" placeholder="" value={this.state.email} onChange={handleChange} />
									</div>
									<div className="form-group">
										<label htmlFor="role">Role</label>
										<input type="text" className="form-control" name="role" disabled={true} value={this.state.role} onChange={handleChange} />
									</div>

									<button className="btn btn-primary" onClick={() => sendProfileUpdate()}>Save</button>
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
	loadProfile: (userId) => {
		dispatch(loadProfile(userId))
	},
	updateProfile: (profile) => {
		dispatch(updateProfile(profile))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)