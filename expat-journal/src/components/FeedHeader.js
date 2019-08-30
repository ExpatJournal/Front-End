import React from "react";
import { Link } from "react-router-dom";
import expatLogo from "../expatLogo.png";

const FeedHeader = props => {
  return (
    <div>
      <div className="desktop">
        <div className="feed-header">
          <img src={expatLogo} alt="expat journal logo" />
          <input type="text" name="search" placeholder="Search..." />
          <Link to="/signup">
            <button className="signup">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FeedHeader;
