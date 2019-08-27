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
      <i className="fas fa-bars " onClick={handleClick}></i>
      <div className="menu-wrapper">

        <div className ={menu ? "menu toggled" : "menu"}>
          <p><Link to="/signup"
          style={{ textDecoration: 'none', color: 'white'  }}>
          Sign Up
          </Link></p>
          <p><Link to="/feed"
          style={{ textDecoration: 'none', color: 'white'  }}>
          View your feed
          </Link></p>
          <p><Link to="/login"
          style={{ textDecoration: 'none', color: 'white'  }}>
          Log In
          </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Nav
