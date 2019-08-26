import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import "./App.css";
import axiosWithAuth from "./utils/axiosWithAuth";

// Contexts
import { PostsContext } from "./contexts/PostsContext";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const addPost = post => {
    axiosWithAuth()
      .post(`******ADD ENPOINT HERE******`, post)
      .then(res => {
        console.log("POST res: ", res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const removePost = (id, e) => {
    e.stopPropagation();
    axiosWithAuth()
      .delete(`******ADD ENPOINT HERE******`)
      .then(res => {
        console.log("DELETE res: ", res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const editPost = (editedPost, e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`******ADD ENPOINT HERE******`, editedPost)
      .then(res => {
        console.log("PUT res: ", res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const getUser = id => {
    axiosWithAuth()
      .get(`******ADD ENPOINT HERE******`)
      .then(res => {
        console.log("GET USER res: ", res);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <PostsContext.Provider value={{ allPosts }}>
      <UserContext.Provider value={{ user, addPost, removePost, editPost }}>
        <div className="App">
          <SignUp />
        </div>
      </UserContext.Provider>
    </PostsContext.Provider>
  );
}

export default App;
