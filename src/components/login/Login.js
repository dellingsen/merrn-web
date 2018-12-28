import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '../layout/Header'
import { authenticateUser } from '../../redux/actions/LoginActions'

export class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: "",
            password: "",
            errorMessage: ""
        }
    }

    render() {

        const handleChange = evt => {
            this.setState({
                [evt.target.name]: evt.target.value
            })
        }

        const loginAction = () => {
            this.props.auth(this.state.userId, this.state.password)
        }

        return (
            <div>
                <Header />
                <div className="Login">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h2>Login</h2>
                            {this.props.errorMessage &&
                                <div className="loginError">{this.props.errorMessage}<br/><br/></div>
                            }
                            <input type="text" name="userId" placeholder="Email Address" className="form-control" value={this.state.userId} onChange={handleChange} /><br />
                            <input type="password" name="password" placeholder="Password" className="form-control" value={this.state.password} onChange={handleChange} /><br />
                            <button className="btn btn-primary" onClick={() => loginAction()}>Login</button>
                            <br /><br />
                            <a href="#createAcount" onClick={() => this.props.showCreateUser()}>Create Account</a><br />
                            <a href="#resetPassword">Forgot Password</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    errorMessage: store.authentication.errorMessage
})

const mapDispatchToProps = dispatch => (
{
    auth: (userId, password) => dispatch(authenticateUser(userId, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)