import React from 'react'
import { Link } from "react-router-dom";
import HamburgerNav from './HamburgerNav'

const Welcome = (props) => {
return(
  <div className="welcome-wrapper">
    <HamburgerNav />
      <p>Welcome to Expat Journal!</p>
      <div className="welcome-btns">
        <Link style={{textDecoration: 'none', color: 'white'}} to="/login"><button className="btn">
          Log In
        </button></Link>
        <Link style={{textDecoration: 'none', color: 'white'}} to="/signup"><button className="btn">
          Sign Up
        </button></Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/feed"><button className="btn">
          Explore
        </button></Link>
      </div>
  </div>
  )
}
export default Welcome
