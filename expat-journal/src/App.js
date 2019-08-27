import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import ProfilePage from "./components/ProfilePage";
import PhotoPage from "./components/PhotoPage/PhotoPage";
import Welcome from "./components/Welcome";
import FormikLogInForm from "./components/LogIn";
import Feed from "./components/Feed";
import Nav from "./components/Nav";
import HamburgerNav from "./components/HamburgerNav";
import EditPost from "./components/EditPost";
import DummyData from "./DummyData";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

// Contexts
import { PostsContext } from "./contexts/PostsContext";
import { UserContext } from "./contexts/UserContext";

//Component Imports:

// Mock Data:
// import DumData from './MockData/DumData.json';
// const Data = DumData;
const PostData = DummyData;

function App() {
  const [userPosts, setUserPosts] = useState([]);
  const [user, setUser] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    setUserPosts(DummyData);
  }, []);

  useEffect(() => {
    axios.get(`https://expatjournal.herokuapp.com/api/posts`).then(res => {
      console.log("GET all posts res: ", res);
      setAllPosts(res.data);
    });
  }, [userPosts]);

  console.log(DummyData);
  // console.log('DummyData', DummyData);

  const addPost = post => {
    axiosWithAuth()
      .post(`https://expatjournal.herokuapp.com/auth/journal`, post)
      .then(res => {
        console.log("POST res: ", res);
        setUserPosts([...userPosts, res.data]);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const removePost = (id, e) => {
    e.stopPropagation();
    axiosWithAuth()
      .delete(`https://expatjournal.herokuapp.com/auth/journal/${id}`)
      .then(res => {
        console.log("DELETE res: ", res);
        const tempPosts = userPosts.filter(post => post.id !== id);
        setUserPosts(tempPosts);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const editPost = (editedPost, e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`https://expatjournal.herokuapp.com/auth/journal/${editedPost.id}`, {
        title: editedPost.title,
        location: editPost.location,
        post: editedPost.post
      })
      .then(res => {
        console.log("PUT res: ", res);
        const tempPosts = userPosts.map(post => {
          if (post.id === res.data.id) {
            post = res.data;
          }
        });
        setUserPosts(tempPosts);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const getUser = () => {
    axiosWithAuth()
      .get(`https://expatjournal.herokuapp.com/auth/journal`)
      .then(res => {
        console.log("GET USER res: ", res);
        setUserPosts(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <Router>
      <PostsContext.Provider value={{ allPosts, DummyData }}>
        <UserContext.Provider
          value={{ userPosts, addPost, removePost, editPost }}
        >
          <div className="App">
            <HamburgerNav />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/profile"
              render={props => {
                return <ProfilePage {...props} value={userPosts} />;
              }}
            />

            <Route exact path="/login" component={FormikLogInForm} />

            <Route exact path="/feed" render={props => <Feed {...props} />} />
            {/* <Route exact path="/signup" component={SignUp} /> */}

            <Route
              path="/edit/:id"
              render={props => {
                return <EditPost {...props} />;
              }}
            />
          </div>
        </UserContext.Provider>
      </PostsContext.Provider>
    </Router>
  );
}

export default App;
