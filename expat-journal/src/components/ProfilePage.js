import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import ProfileCard from "./ProfileCard";
import LoggedInNav from './LoggedInNav'
import { Link } from 'react-router-dom'

const ProfilePage = props => {
  const { userPosts } = useContext(UserContext);
  return (
    <div className="dashboard">
      <LoggedInNav />
      <div className="dashboard-header">
        <img src="" alt="expat journal logo" />
        <div className="action-container">
          <input type="text" name="search" placeholder="Search..." />
          <img src="" alt="user image" />
          <Link style={{textDecoration: 'none', color: 'white' }} to="/new-post">
            <button className="btn">Upload</button>
          </Link>
          {/* <button>Sign Out</button> */}
        </div>
      </div>
      <h3>My Posts</h3>
      <div className="post-container">
        {userPosts.map(post => (
          <ProfileCard {...props} post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
