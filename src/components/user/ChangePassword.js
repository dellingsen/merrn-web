import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Well,
	FormGroup,
	Form,
	Button,
	Col,
	Row,
	Grid,
	ButtonToolbar
} from 'react-bootstrap'
import { changePassword } from '../../redux/actions/UserActions'
import { loadProfile } from '../../redux/actions/ProfileActions'
import { FieldGroup } from '../../util/FieldGroup'
import { FormErrors } from '../../util/FormErrors'
import UserSvc from '../../service/UserSvc';

//const PASSWORD_EIGHT_ALPHA_ONE_NUMERIC = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$";
// Minimum of 8 characters, at least 1 number, 1 letter, 1 special
const PASSWORD_EIGHT_ALPHA_NUMERIC_SPECIAL = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$";
const CURRENT_PASSWORD_ERROR = "Current password does not match user account";
//const OLD_PASSWORD_ERROR = "Password must have 8 alphanumeric characters with at least 1 number";
const NEW_PASSWORD_ERROR = "Password must have minimum of 8 characters, 1 number, and 1 special character";
const PASSWORD_MATCH_ERROR = "Password must match new password.";

class ChangePassword extends Component {

	constructor(props) {
		super(props);

		this.state = {
			passwordForm: { password: "", newPassword1: "", newPassword2: "" },
			formErrors: { password: "", newPassword1: "", newPassword2: "" },
			formValid: false,
		}

		this.validateField = this.validateField.bind(this);
	}

	componentDidMount() {
		const userNameParam = this.props.match.params.userName;
		this.props.getUser(userNameParam)
	}

	validateField(fieldName, value) {
		const passwordForm = this.state.passwordForm;
		let fieldValidationErrors = this.state.formErrors;
		let passwordValid = this.state.passwordValid;
		let newPassword1Valid = this.state.newPassword1Valid;
		let newPassword2Valid = this.state.newPassword2Valid;

		if (fieldName === 'password') {
			passwordValid = false;
			const userSvc = new UserSvc();
			userSvc.authenticateUser(this.props.userProfile.userName, value, "demo1").then(authedUser => {
				if (authedUser) {
					passwordValid = true;
					fieldValidationErrors.password = '';
				} else {
					fieldValidationErrors.password = CURRENT_PASSWORD_ERROR;
				}
				this.setState({passwordValid: passwordValid})
			});
		}
		else if (fieldName === 'newPassword1') {
			newPassword1Valid = value.match(PASSWORD_EIGHT_ALPHA_NUMERIC_SPECIAL);
			fieldValidationErrors.newPassword1 = newPassword1Valid ? '' : NEW_PASSWORD_ERROR;
		}
		else if (fieldName === 'newPassword2') {
			newPassword2Valid = (value === passwordForm.newPassword1);
			fieldValidationErrors.newPassword2 = newPassword2Valid ? '' : PASSWORD_MATCH_ERROR;
		}

		this.setState({
			formErrors: fieldValidationErrors,
			passwordValid: passwordValid,
			newPassword1Valid: newPassword1Valid,
			newPassword2Valid: newPassword2Valid,
		}, this.validateForm);
	}

	validateForm() {
		this.setState({ formValid: this.state.passwordValid && this.state.newPassword1Valid && this.state.newPassword2Valid });
	}

	render() {

		const updatePasswordState = event => {
			const field = event.target.name;
			const val = event.target.value;

			let passwordForm = this.state.passwordForm;
			passwordForm[field] = val;

			this.validateField(field, val);
			this.setState({ passwordForm })
		}

		const changePassword = () => {
			const passwordForm = this.state.passwordForm;
			this.props.changePassword(this.props.userProfile.userName, passwordForm.newPassword1, "demo1")
			setTimeout(function () {
				window.location = '/';
			}.bind(this), 1000)
		}

		const { passwordForm } = this.state;

		return (
			<div>
				<Grid>
					<Col sm={3}></Col>
					<Col sm={6}>
						<h4><center>Change Current Password</center></h4>
						<div><FormErrors formErrors={this.state.formErrors} /></div>
						<Row>
							<Well>
								<Form horizontal>
									<FieldGroup
										name="userName"
										label="User Name"
										type="text"
										value={this.props.userProfile.userName}
										disabled />
									<FieldGroup
										name="password"
										label="Current Password"
										type="text"
										value={passwordForm.password}
										onChange={updatePasswordState} />
									<FieldGroup
										name="newPassword1"
										label="New Password"
										type="text"
										value={passwordForm.newPassword1}
										onChange={updatePasswordState} />
									<FieldGroup
										name="newPassword2"
										label="Confirm New Password"
										type="text"
										disabled={!this.state.newPassword1Valid}
										value={passwordForm.newPassword2}
										onChange={updatePasswordState} />
								</Form>
								<Row>
									<Col sm={8}></Col>
								</Row>
								<FormGroup>
									<Col sm={5}></Col>
									<Col sm={7}>
										<ButtonToolbar>
											<Button href="/">Cancel</Button>
											<Button className="btn-primary active" disabled={!this.state.formValid} onClick={changePassword}>Change</Button>
										</ButtonToolbar>
									</Col>
								</FormGroup>
							</Well>
						</Row>
					</Col>
					<Col sm={3}></Col>
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		userProfile: state.profile
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getUser: (userName) => {
			dispatch(loadProfile(userName))
		},
		changePassword(userName, newPassword, tenantId) {
			dispatch(changePassword(userName, newPassword, tenantId))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)

