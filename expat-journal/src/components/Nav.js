import React from 'react'
import { Link } from "react-router-dom";

const Nav = (props) => {
return(
  <div className="nav-wrapper">
    <h1>Expat Journal</h1>
    <div className="nav">
      <p><Link to="/signup">Sign Up</Link></p>
      <p><Link to="/feed">Browse</Link></p>
      <p><Link to="/login">Log In</Link></p>
    </div>
  </div>
  )
}
export default Nav
