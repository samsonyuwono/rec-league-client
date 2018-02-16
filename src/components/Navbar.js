import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/Navbar.css'


const link = {
  width: '200px',
  padding: '24px',
  margin: '6px 6px 6px',
  background: '#000080',
  textDecoration: 'none',
  color: 'white',
  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',
}


const Navbar = () =>
  <div className='nav-bar'>
    <NavLink
    to='/'
    exact
    style={link}
    activeStyle={{
      background: '#FF0000'
    }}>Home</NavLink>

    <NavLink
    to='/teams'
    exact
    style={link}
    activeStyle={{
      background: '#FF0000'
    }}>Teams</NavLink>

    <NavLink
      to='/teams/new'
      exact
      style={link}
      activeStyle={{
      background: '#FF0000'
    }}>Add a team</NavLink>

    <NavLink
      to='/players'
      exact
      style={link}
      activeStyle={{
      background: '#FF0000'
    }}>Players</NavLink>


    <NavLink
    to='/players/new'
    exact
    style={link}
    activeStyle={{
      background: '#FF0000'
    }}>Add a player</NavLink>

    <NavLink
    to='/teams/standings'
    exact
    style={link}
    activeStyle={{
      background: '#FF0000'
    }}>Standings</NavLink>
  </div>


export default Navbar;
