export function signupUser(userData) {
  return (dispatch) => {
    dispatch({type: "SEND_AUTH_REQUEST"});
    return fetch("/api/users", {
      method: "post",
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
    return fetch("http://localhost:3000/api/login", {
      method: "post",
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
