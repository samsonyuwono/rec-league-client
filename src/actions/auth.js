import { resetAuthForm } from './authForm';

let API_URL = "http://localhost:3001/api";

const addUser = user => {
  return {
    type: 'SIGN_UP_USER',
    user
  }
}

export function signupUser(userData) {
  console.log
  return (dispatch) => {
    dispatch({type: "SEND_AUTH_REQUEST"});
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(JSON => { dispatch({
        type: "SIGN_UP_USER",
        JSON: JSON
      });
    });
  }
}

export function loginUser(userData) {
  return (dispatch) => {
    dispatch({type: "SEND_AUTH_REQUEST"});
    return fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(JSON => { dispatch({
        type: "LOG_IN_USER",
        JSON: JSON}
      );
    });
  }
}

export function logoutUser() {
  return {type: 'LOG_OUT_USER'};
}

// TeamApi.login(userObj)
// .then((json) => {
//   console.log(json)
//   this.setState({
//     user: json.user
//   })
//   localStorage.setItem('userToken', json.token)
//   console.log('userToken')
