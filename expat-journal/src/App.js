import React, { useState, useEffect } from "react";
import SignUp from './components/SignUp'
import "./App.css";
import axiosWithAuth from "./utils/axiosWithAuth";

function App() {
  const [userPosts, setUserPosts] = useState([]);
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

  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
