import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import PostCard from "./PostCard";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <img src="" alt="user image" />
        <p>USERNAME HERE</p>
      </div>
      <p>username's posts</p>
      <div className="post-container">
        {user.map(post => (
          <PostCard post={post} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
