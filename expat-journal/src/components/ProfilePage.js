import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import ProfileCard from "./ProfileCard";
import LoggedInNav from "./LoggedInNav";

const ProfilePage = props => {
  const { userPosts, removePost } = useContext(UserContext);
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
      <h3>My Posts</h3>
      <div className="post-container">
        {userPosts.map(post => (
          <ProfileCard
            {...props}
            post={post}
            key={post.id}
            removePost={removePost}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
