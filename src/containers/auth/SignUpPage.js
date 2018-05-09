import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { signupUser } from "../../actions/auth";
import { updateAuthFormData } from "../../actions/authForm";
import SubmitButton from "../../components/SubmitButton";

class SignUpPage extends Component {
  constructor() {
    super();

    this.state = {
      fields: {
        username: "",
        password: ""
      }
    };
  }
  handleOnChange = event => {
    console.log(event.target);
    const { name, value } = event.target;
    const currentAuthFormData = Object.assign({}, this.props.authFormData, {
      [name]: value
    });
    this.props.updateAuthFormData(currentAuthFormData);
  };

  handleOnSubmit = event => {
    console.log(this.props);
    event.preventDefault();
    this.props.signupUser(this.props.authFormData, this.props.history);
    debugger;
  };
  //
  // componentWillReceiveProps(props) {
  //   debugger;
  //   if (!!props.token) {
  //     this.props.history.push('/players')
  //   }
  // }

  render() {
    const { signup_errors, isLoading, username, password } = this.props;
    return (
      <div style={{ width: "330px", margin: "auto" }}>
        <h2 className="form-signin-heading">Sign Up</h2>
        <form
          className="signupForm"
          onSubmit={event => this.handleOnSubmit(event)}
        >
          <div
            className={classnames("form-group", {
              "has-error": signup_errors && signup_errors.username
            })}
          >
            <input
              type="username"
              name="username"
              value={username}
              onChange={this.handleOnChange}
              placeholder="username"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleOnChange}
              placeholder="password"
            />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authFormData: state.authFormData
  };
};

export default connect(mapStateToProps, { updateAuthFormData, signupUser })(
  SignUpPage
);
