import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Grid, Row, Col, Form, Button, Modal, ControlLabel } from 'react-bootstrap'
import { loadUserItems } from '../../redux/actions/UserActions'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { ClipLoader } from 'react-spinners';
import * as moment from 'moment';

class Users extends Component {

	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			showDeleteModal: false,
			selectedUser: ''
		}

		this.closeDeleteModal = this.closeDeleteModal.bind(this);
		this.showDeleteModal = this.showDeleteModal.bind(this);
	}

	componentDidMount() {
		this.props.getUserItems()
	}

	closeDeleteModal() {
		this.setState({ showDeleteModal: false, selectedUser: '' });
	}

	showDeleteModal(userName) {
		this.setState({ showDeleteModal: true, selectedUser: userName });
	}

	render() {

		const clickableActiveStatus = (userName, user) => {
			if (user.active) {
				return (<a href="#" onClick={() => updateStatus(userName)}>Disable</a>);
			} else {
				return (<a href="#" onClick={() => updateStatus(userName)}>Enable</a>);
			}
		}

		const clickableDelete = (userName, user) => {
			return (
				<a href="#" onClick={() => this.showDeleteModal(userName)}>Delete</a>
			);
		}

		const updateStatus = (userName) => {
			/*
			const userSvc = new UserSvc();
			userSvc.getUserProfile(userName, "demo1").then(userProfile => {
				userProfile.active = (userProfile.active ? false : true)
				this.props.updateUserProfile(userName, userProfile, "demo1")
				setTimeout(function () {
					this.props.history.go(0);
				}.bind(this), 250)
			})
			*/
		}

		const deleteUser = () => {
			/*
			const userName = this.state.selectedUser;
			this.props.deleteUser(userName)
			this.closeDeleteModal();
			this.props.history.go(0);
			*/
		}

		const editUser = (userName, user) => {
			if (user.active) {
				return (<a href={"/editUser/" + user.userName}>{userName}</a>);
			} else {
				return (<p>{userName}</p>);
			}
		}

		const formatDate = (date, alert) => {
			return (
				moment(date).utc().format('YYYY-MM-DD')
			);
		}

		const spinnerStyle = {
			position: 'absolute',
			width: '200px',
			height: '100px',
			top: '50%',
			left: '60%',
			margin: '-100px 0 0 -150px',
		}

		if (this.props.itms.length > 0) {
			return (
				<div>
					<Grid>
						<Row>
							<Col sm={12}>
								<h4>Application Users</h4>
							</Col>
						</Row><br />
						<Row>
							<div id="users">
								<BootstrapTable ref='table' data={this.props.itms} striped hover pagination>
									<TableHeaderColumn width='120' dataSort={true} isKey={true} dataFormat={editUser} dataField='userName'>User Name</TableHeaderColumn>
									<TableHeaderColumn width='120' dataSort={true} dataField='firstName'>First Name</TableHeaderColumn>
									<TableHeaderColumn width='120' dataSort={true} dataField='lastName'>Last Name</TableHeaderColumn>
									<TableHeaderColumn width='200' dataSort={true} dataField='email'>Email</TableHeaderColumn>
									<TableHeaderColumn width='160' dataSort={true} dataField='role'>Role</TableHeaderColumn>
									<TableHeaderColumn width='160' dataSort={true} dataFormat={formatDate} editable={{ type: 'datetime', readOnly: true }} dataField='created_at'>Create Date</TableHeaderColumn>
									<TableHeaderColumn dataFormat={clickableActiveStatus} dataField='userName'>Status</TableHeaderColumn>
									<TableHeaderColumn dataFormat={clickableDelete} dataField='userName'>Delete</TableHeaderColumn>
								</BootstrapTable>
							</div>
						</Row>
					</Grid>
					<Modal show={this.state.showDeleteModal} onHide={this.closeDeleteModal}>
						<Modal.Header closeButton>
							<Modal.Title>Delete User</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form>
								<ControlLabel>Are you sure you want to delete this User? <br />This is a permanent function and cannot be undone.</ControlLabel>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button id="Delete" onClick={() => deleteUser()}>Delete</Button>
							<Button id="Cancel" onClick={this.closeDeleteModal}>Cancel</Button>
						</Modal.Footer>
					</Modal>
					<div style={spinnerStyle}>
						{this.state.loading ? <div className="spinner-title"><b>Saving...</b></div> : ''}
						<ClipLoader color={'#5397DA'} loading={this.state.loading} margin="4px" />
					</div>
				</div>
			)
		}
		else {
			return (<div></div>)
		}
	}
}

const mapStateToProps = store => ({
	itms: store.user.itms
})

const mapDispatchToProps = dispatch => ({
	getUserItems: () => {
		dispatch(loadUserItems())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)