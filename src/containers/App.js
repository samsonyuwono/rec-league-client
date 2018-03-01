import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../components/Home'
import TeamsList from './teams/TeamsList';
import TeamShow from '../components/teams/TeamShow';
import TeamForm from '../components/teams/TeamForm'
import TeamEditForm from '../components/teams/TeamEditForm';
import TeamStandings from '../components/teams/TeamStandings';
import PlayersList from './players/PlayersList';
import PlayerForm from '../components/players/PlayerForm'
import PlayerShow from '../components/players/PlayerShow';
import PlayerEditForm from '../components/players/PlayerEditForm';
import Navbar from '../components/Navbar'
import ReactDOM from 'react-dom';
import './../assets/App.css'
import './../assets/Background.css'
import TeamApi from '../services/teamListrApi'
import LoginForm from '../components/auth/LoginForm'


class App extends Component {

  state = {
    user: {}
  }

  loginUser = (userObj) => {
    console.log(userObj)
        TeamApi.login(userObj)
        .then((json) => {
          console.log(json)
          this.setState({
            user: json.user
          })
          localStorage.setItem('userToken', json.token)
          console.log('userToken')
      })
  }

  componentDidMount(){

}
  render() {

    return (
      <Router>
        <div className="App">
          <div className="container1 overlay">
            <div id="court"></div>
					  <Navbar />
                <Switch>
                 <Route exact path='/' component={Home}/>
                 <Route exact path='/teams/standings' component={TeamStandings}/>
                 <Route exact path='/teams/new' component={TeamForm}/>
                 <Route exact path='/teams/:id' component={TeamShow}/>
							   <Route exact path='/teams' component={TeamsList}/>
                 <Route exact path='/teams/:id/edit' component={TeamEditForm}/>
                 <Route exact path='/players' component={PlayersList}/>
                 <Route exact path='/players/new' component={PlayerForm}/>
                 <Route exact path='/players/:id' component={PlayerShow}/>
                 <Route exact path='/players/:id/edit' Redirect to="/players" component={PlayerEditForm}/>
               </Switch>
               { localStorage.getItem('userToken') ? <p>Welcome User</p> : "Please login"}
               <p>{this.state.user.username}</p>
                 <LoginForm onLogin={this.loginUser}/>

            </div>
          </div>
      </Router >
    )
  }
}

export default App;
