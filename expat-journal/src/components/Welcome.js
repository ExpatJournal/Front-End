import React from 'react'
import { Link } from "react-router-dom";

const Welcome = (props) => {
return(
  <div>
    <h1>Expat Journal</h1>
    <p><Link to="/signup">Sign Up</Link></p>
    <p><Link to="/login">Log In</Link></p>
  </div>
  )
}
export default Welcome
