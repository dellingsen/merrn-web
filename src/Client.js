import React, { Component } from 'react'
import './App.css'
import Navigation from './components/layout/Navigation'
import Login from './components/login/Login'
import CreateUser from './components/login/CreateUser'
import ForgottenUser from './components/login/ForgotUser'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      create: false,
      forgotten: false
    }
  }

  render() {

    const showCreateUser = () => {
      this.setState({
        create:true
      })
    }

    var token = sessionStorage.getItem("token")

    if (!token && !this.state.create && !this.state.forgotten) {
      return (
        <div className="App">
          <Login showCreateUser={showCreateUser}/>
        </div>
      )
    } else if (!token && this.state.create) {
      return(<div className="createUser"><CreateUser /></div>)
    } else if (!token && this.state.forgotten) {
      return(<div className="forgotUser"><ForgottenUser /></div>)
    } else {
      return (
        <div className="App">
          <Navigation />
        </div>
      )
    }
  }
}


export default App

