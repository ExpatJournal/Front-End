import React from 'react'
import { Link } from "react-router-dom";
import HamburgerNav from './HamburgerNav'

const Welcome = (props) => {
return(
  <div className="welcome-wrapper">
    <HamburgerNav />
      <p>Welcome to Expat Journal!</p>
      <div className="welcome-btns">
        <button className="btn"><Link style={{    textDecoration: 'none', color: 'white' }} to="/log0in">
          Log In
        </Link></button>
        <button className="btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/signup">
          Sign Up
        </Link></button>
      </div>
  </div>
  )
}
export default Welcome
