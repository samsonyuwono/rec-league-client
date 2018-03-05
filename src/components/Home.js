import React from 'react'
import LoginPage from '../containers/auth/LoginPage'
import SignUpPage from '../containers/auth/SignUpPage'
import '../assets/Home.css'

const Home = (props) => {
  return(
    <div className='title'>
      <h1 style={{textAlign: "center", marginBottom: "20px"}}>
      Welcome to the Rec League App</h1>
      <SignUpPage />
      </div>
  )

}

export default Home;
