import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateAuthFormData } from '../../actions/authForm';
import { loginUser } from '../../actions/auth';

class LoginForm extends Component {

  handleOnChange = event => {
    console.log(event.target)
    const { name, value } = event.target;
    const currentAuthFormData = Object.assign({}, this.props.authFormData, {
      [name]: value,
    })
    debugger;
    this.props.updateAuthFormData(currentAuthFormData)
  }


  handleOnSubmit = (event) => {
    event.preventDefault()
    // const userData = { username: this.state.username, password: this.state.password }
    this.props.loginUser(this.props.loginFormData)
    debugger;
  }

  render() {
    const { username, password } = this.props.authFormData;
    return(
      <div>
      <h1>Login</h1>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text"
          onChange={this.handleOnChange}
           name="username"
           />
          <input type="text"
          onChange={this.handleOnChange}
          name="password"
           />
          <input type="submit" value="Login"/>
        </form>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authFormData: state.authFormData
  }
}


export default connect(mapStateToProps, {updateAuthFormData, loginUser})(LoginForm)
