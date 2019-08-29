import React, { useState } from 'react'
import { Link } from "react-router-dom";


const LoggedInNav = (props) => {

  const [menu, setMenu] = useState(false)
  const handleClick = () => {
    setMenu(!menu);
    console.log('clicked');
  }

  return(
    <div className="burger-menu li">
      <i className="fas fa-bars " onClick={handleClick}></i>
      <div className="menu-wrapper">
        <div className ={menu ? "menu toggled" : "menu"}>
          <p onClick={handleClick}><Link to="/profile"
          style={{ textDecoration: 'none', color: 'white'  }}>
          My Posts
          </Link></p>
          <p onClick={handleClick}><Link to="/my-feed"
          style={{ textDecoration: 'none', color: 'white'  }}>
          Feed
          </Link>
          </p>
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
