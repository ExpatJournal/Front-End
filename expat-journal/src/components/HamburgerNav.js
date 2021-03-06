import React, { useState } from 'react'
import { Link } from "react-router-dom";


const HamburgerNav = (props) => {

  const [menu, setMenu] = useState(true)
  const handleClick = () => {
    setMenu(!menu);
    console.log('clicked');
  }

  return(
    <div className="navigation">
    <div className="burger-menu">
      <i className="fas fa-bars " onClick={handleClick}></i>
      <div className="menu-wrapper">
        <div className ={menu ? "menu toggled" : "menu"}>
          <p onClick={handleClick}><Link to="/signup"
          style={{ textDecoration: 'none', color: 'white'  }}>
          Sign Up
          </Link></p>
          <p onClick={handleClick}><Link to="/feed"
          style={{ textDecoration: 'none', color: 'white'  }}>
          Explore
          </Link></p>
          <p onClick={handleClick}><Link to="/login"
          style={{ textDecoration: 'none', color: 'white'  }}>
          Log In
          </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}
export default HamburgerNav
