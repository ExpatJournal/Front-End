import React, { useState } from 'react'
import { Link } from "react-router-dom";


const Nav = (props) => {

  const [menu, setMenu] = useState(false)
  const handleClick = () => {
    setMenu(!menu);
    console.log('clicked');
  }

  return(
    <div className="burger-menu">
      <i className="fas fa-bars" onClick={handleClick}></i>
      <div className ={menu ? "menu toggled" : "menu"}>
        <p><Link to="/signup">Sign Up</Link></p>
        <p><Link to="/feed">View your feed</Link></p>
        <p><Link to="/login">Log In</Link></p>
      </div>
    </div>
  )
}
export default Nav
