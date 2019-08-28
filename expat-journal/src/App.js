import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import ProfilePage from "./components/ProfilePage";
import Welcome from "./components/Welcome";
import FormikLogInForm from "./components/LogIn";
import Feed from "./components/Feed";
import TokenFeed from "./components/TokenFeed";
import Nav from "./components/Nav";
import HamburgerNav from "./components/HamburgerNav";
import EditPost from "./components/EditPost";
import DummyData from "./DummyData";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

// Contexts
import { PostsContext } from "./contexts/PostsContext";
import { UserContext } from "./contexts/UserContext";

//Component Imports:

const PostData = DummyData;

function App() {
  const [userPosts, setUserPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

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

  useEffect(() => {
    axios.get(`https://expatjournal.herokuapp.com/api/posts`).then(res => {
      console.log("GET all posts res: ", res);
      setAllPosts(res.data);
    });
  }, [userPosts]);

  // console.log(DummyData);
  // console.log('DummyData', DummyData);

  const addPost = post => {
    let newPost = post;
    const postText = {
      title: newPost.title,
      location: newPost.location,
      post: newPost.post
    };
    axiosWithAuth()
      .post(`https://expatjournal.herokuapp.com/auth/journal`, postText)
      .then(res => {
        console.log("POST res: ", res);
        axiosWithAuth()
          .post(
            `https://expatjournal.herokuapp.com/auth/journal/${res.data.id}/media`,
            post.media
          )
          .then(res => {
            newPost.media = res.data;
          })
          .catch(err => {
            console.log(err.response);
          });
        setUserPosts([...userPosts, newPost]);
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

  const editPost = editedPost => {
    const newEdit = {
      title: editedPost.title,
      location: editedPost.location,
      post: editedPost.post
    };
    // e.preventDefault();
    axiosWithAuth()
      .put(
        `https://expatjournal.herokuapp.com/auth/journal/${editedPost.id}`,
        newEdit
      )
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

  return (
    <PostsContext.Provider value={{ allPosts, DummyData }}>
      <UserContext.Provider
        value={{ userPosts, addPost, removePost, editPost }}
      >
        <div className="App">
          <Route exact path="/" component={Welcome} />

          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/profile" component={ProfilePage} />
          <Route
            exact
            path="/my-feed"
            render={props => {
              return <TokenFeed {...props} value={userPosts} />;
            }}
          />
          <Route exact path="/login" component={FormikLogInForm} />
          <Route exact path="/feed" render={props => <Feed {...props} />} />

          <Route
            path="/edit/:id"
            render={props => {
              return <EditPost {...props} />;
            }}
          />
        </div>
      </UserContext.Provider>
    </PostsContext.Provider>
  );
}

export default App;
