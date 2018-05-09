import React, {Component} from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux'
import { loginUser } from '../../actions/auth';
import { AuthFormWrapper } from '../../components/AuthFormWrapper';
import { updateAuthFormData } from '../../actions/authForm';
import SubmitButton from '../../components/SubmitButton';

class LogInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    };
  }

  handleOnChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state);
  }
  // 
  // componnentDidMount(){
  //
  // }

  // componentWillReceiveProps(nextProps) {
  //   // redirect only if user logs in successfully
  //   if (!!nextProps.token) {
  //     this.props.history.push('/players')
  //   };
  //   // does not clear username field if username is found but password is wrong
  //   if (nextProps.errors && nextProps.errors.password) {
  //     this.setState({
  //       password: ''
  //     });
  //   } else {
  //     this.setState({
  //       username: '',
  //       password: ''
  //     });
  //   }
  // }

  render() {
    const { username, password} = this.state
    const { errors, isLoading } = this.props
    return (
      <AuthFormWrapper title={"Log In"} handleSubmit={this.handleOnSubmit}>

        <div className={classnames("form-group", {'has-error': errors && errors.username })}>
          <input
            type="username"
            name="username"
            value={username}
            onChange={this.handleOnChange}
            placeholder="username"
            required autoFocus
          />
          {errors && errors.username ? <span className="help-block">{errors.username}</span> : null}
        </div>

        <div className={classnames("form-group", {'has-error': errors && errors.password !== "." })}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleOnChange}
            placeholder="password"
            required
          />
          {errors && errors.password ? <span className="help-block">{errors.password}</span> : null}
        </div>

        <div className="form-group">
          <SubmitButton text={"Log In"} isLoading={isLoading}/>
        </div>

      </AuthFormWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    authFormData: state.playerFormData
  }
}


export default LogInPage;
