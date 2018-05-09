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

const Guestbar = () =>
<div className='guestbar'>
  <NavLink
  to='/signup'
  exact
  style={link}
  activeStyle={{
    background: '#cccccc',
  }}>Sign Up</NavLink>

  <NavLink
  to='/login'
  exact
  style={link}
  activeStyle={{
    background: '#cccccc',
  }}>Login</NavLink>
</div>

export default Guestbar;
