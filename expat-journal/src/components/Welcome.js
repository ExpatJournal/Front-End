import React from 'react'
import { Link } from "react-router-dom";
import HamburgerNav from './HamburgerNav'

const Welcome = (props) => {
return(
  <div className="welcome-wrapper">
    <HamburgerNav />
      <p>Welcome to Expat Journal!</p>
  </div>
  )
}
export default Welcome
