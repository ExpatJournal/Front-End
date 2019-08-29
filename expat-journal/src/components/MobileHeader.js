import React from 'react'
import LoggedInNav from "./LoggedInNav";
import ProfileCropped from '../assets/ProfileCropped.jpg'

const MobileHeader = (props) => {
return(
  <div>
      <div className="dashboard">
      <div className="dashboard-header">
        {/* <img src="" alt="expat journal logo" /> */}
        <img className="profile-photo" src={ProfileCropped} alt="user image" />
        <input type="text" name="search" placeholder="Search..." />
        {/* <button>Sign Out</button> */}
      </div>
    </div>
  <LoggedInNav />
  </div>
  )
}
export default MobileHeader
