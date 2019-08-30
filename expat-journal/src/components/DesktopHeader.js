import React from "react";
import ProfileCropped from "../assets/ProfileCropped.jpg";
import LoggedInNav from "./LoggedInNav";
import { Link } from "react-router-dom";
import expatLogo from "../expatLogo.png";

const DesktopHeader = props => {
  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <div className="desktop">
        <div className="desktop-header">
          <img src={expatLogo} alt="expat journal logo" />
          <input type="text" name="search" placeholder="Search..." />
          <img
            className="profile-photo"
            src={ProfileCropped}
            alt="user image"
          />
          <Link to="/new-post">
            <button className="upload">Upload</button>
          </Link>
          <Link to="/">
            <button onClick={signOut} className="sign-out">
              Sign Out
            </button>
          </Link>
          <LoggedInNav />
        </div>
      </div>
    </div>
  );
};
export default DesktopHeader;
