import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import FeedCard from "./FeedCard";
import LoggedInNav from './LoggedInNav'

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="dashboard">
      <LoggedInNav />
      <div className="dashboard-header">
        <img src="" alt="expat journal logo" />
        <div className="action-container">
          <input type="text" name="search" placeholder="Search..." />
          <img src="" alt="user image" />
          <button>Upload</button>
          {/* <button>Sign Out</button> */}
        </div>
      </div>
      <div className="post-container">
        {user.map(post => (
          <FeedCard
            user={post.username}
            content={post.content}
            location={post.location}
            img={post.imgURL}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
