import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/Navbar.css'


const link = {
  width: '200px',
  padding: '12px',
  margin: '6px 6px 6px',
  background: '#323232',
  textDecoration: 'none',
  color: 'white',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
}


const Navbar = () =>
  <div className='navbar'>
    <NavLink
    to='/'
    exact
    style={link}
    activeStyle={{
      background: '#cccccc',
    }}>Home</NavLink>

    <NavLink
    to='/teams'
    exact
    style={link}
    activeStyle={{
      background: '#cccccc'
    }}>Teams</NavLink>

    <NavLink
      to='/teams/new'
      exact
      style={link}
      activeStyle={{
      background: '#cccccc'
    }}>Add a team</NavLink>

    <NavLink
      to='/players'
      exact
      style={link}
      activeStyle={{
      background: '#cccccc'
    }}>Players</NavLink>


    <NavLink
    to='/players/new'
    exact
    style={link}
    activeStyle={{
      background: '#cccccc'
    }}>Add a player</NavLink>

    <NavLink
    to='/teams/standings'
    exact
    style={link}
    activeStyle={{
      background: '#cccccc'
    }}>Standings</NavLink>
  </div>


export default Navbar;
