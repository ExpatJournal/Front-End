import React, { useState, useEffect } from "react";
import SignUp from './components/SignUp'
import PhotoPage from './components/PhotoPage/PhotoPage';
import "./App.css";
import Welcome from "./components/Welcome";
import FormikLogInForm from './components/LogIn';
import Feed from "./components/Feed";
import Nav from "./components/Nav";
import DummyData from "./DummyData";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  // console.log('DummyData', DummyData);

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
      <PostsContext.Provider value={{ allPosts, DummyData }}>
        <UserContext.Provider value={{ user, addPost, removePost, editPost }}>
          <div className="App">
            <Nav />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/signup" component={SignUp} />

            <Route exact path='/login' component={FormikLogInForm} />

            <Route exact path="/feed" render={props => <Feed {...props} />} />
            {/* <Route exact path="/signup" component={SignUp} /> */}
          </div>
        </UserContext.Provider>
      </PostsContext.Provider>
    </Router>

  );
}   

export default App;
