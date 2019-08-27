import React, { useState } from 'react'
import { Link } from "react-router-dom";


const LoggedInNav = (props) => {

  const [menu, setMenu] = useState(true)
  const handleClick = () => {
    setMenu(!menu);
    console.log('clicked');
  }

  return(
    <div className="burger-menu">
      <i className="fas fa-bars " onClick={handleClick}></i>
      <div className="menu-wrapper">

        <div className ={menu ? "menu toggled" : "menu"}>
          <p onClick={handleClick}><Link to="/feed"
          style={{ textDecoration: 'none', color: 'white'  }}>
          Explore
          </Link></p>
          <p onClick={handleClick}><Link to="/login"
          style={{ textDecoration: 'none', color: 'white'  }}>
          Log Out
          </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
export default LoggedInNav
