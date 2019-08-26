import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import SignUp from './components/SignUp'
import PhotoPage from './components/PhotoPage/PhotoPage';
import DummyData from './DummyData'
=======
import SignUp from "./components/SignUp";
import DummyData from "./DummyData";
>>>>>>> 9760a450a746682e54563171fed6c97b01bf4f5c
import "./App.css";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Contexts
import { PostsContext } from "./contexts/PostsContext";
import { UserContext } from "./contexts/UserContext";

//Component Imports:
import LogInForm from './components/WelcomeBackForm/LogInForm';

// Mock Data:
import DumData from './MockData/DumData.json';
const Data = DumData;
const PostData = DummyData;

function App() {
<<<<<<< HEAD
  const [userPosts, setUserPosts] = useState([]);

  const addPost = post => {};


  return (
    <div className="App">
      {/* <LogInForm/>
      <SignUp/> */}

     <PhotoPage data={PostData}/>

    </div>
=======
  const [user, setUser] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  console.log(DummyData);

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
    <Router>
      <PostsContext.Provider value={{ allPosts }}>
        <UserContext.Provider value={{ user, addPost, removePost, editPost }}>
          <div className="App">
            <h1>Expat Journal</h1>
            <Route exact path="/signup" component={SignUp} />
          </div>
        </UserContext.Provider>
      </PostsContext.Provider>
    </Router>
>>>>>>> 9760a450a746682e54563171fed6c97b01bf4f5c
  );
}

export default App;
