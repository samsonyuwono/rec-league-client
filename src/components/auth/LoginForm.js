import React, { Component } from 'react';

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleUserInputChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePassInputChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const userObj = { username: this.state.username, password: this.state.password }

    console.log(userObj)
    this.props.onLogin(userObj)
  }
  render(){
    return(
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleUserInputChange} value={this.state.username} />
          <input type="text" onChange={this.handlePassInputChange} value={this.state.password} />
          <input type="submit" value="Login"/>
        </form>
    )
  }
}

export default LoginForm
