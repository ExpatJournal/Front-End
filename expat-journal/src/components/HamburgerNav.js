import React from 'react'
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

const Nav = (props) => {
return(
  <div className="nav-wrapper">
    <div className="nav">
      <p><Link to="/signup">Sign Up</Link></p>
      <p><Link to="/feed">View your feed</Link></p>
      <p><Link to="/login">Log In</Link></p>
    </div>
  </div>
  )
}
export default Nav
