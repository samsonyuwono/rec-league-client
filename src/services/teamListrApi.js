class TeamApi {
  static login(userObj){

    const data = JSON.stringify(userObj)
    fetch('http://localhost:3000/login', {
      method: "post",
      body: data,
      headers: {
        "Accept":"application/json",
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
    })
  }

  static register(){

  }
}

// TeamApi.login()

export default TeamApi
