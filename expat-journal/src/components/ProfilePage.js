import React, { useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import ProfileCard from "./ProfileCard";
import LoggedInNav from "./LoggedInNav";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const ProfilePage = props => {
  const { userPosts, removePost, setUserPosts } = useContext(UserContext);

  useEffect(() => {
    // setUserPosts(DummyData);
    axiosWithAuth()
      .get(`https://expatjournal.herokuapp.com/auth/journal`)
      .then(res => {
        console.log("login fetch res: ", res);
        setUserPosts(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  }, []);
  return (
    <div className="dashboard">
      <LoggedInNav />
      <div className="dashboard-header">
        <img src="" alt="expat journal logo" />
        <div className="action-container">
          <input type="text" name="search" placeholder="Search..." />
          <img src="" alt="user image" />
          <button className="btn">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/new-post"
            >
              Upload
            </Link>
          </button>
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
