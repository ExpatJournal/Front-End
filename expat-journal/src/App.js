import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import ProfilePage from "./components/ProfilePage";
import DummyData from "./DummyData";
import "./App.css";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Contexts
import { PostsContext } from "./contexts/PostsContext";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    setUser(DummyData);
  }, []);

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
            <Route
              exact
              path="/profile"
              render={props => {
                return <ProfilePage {...props} value={user} />;
              }}
            />
          </div>
        </UserContext.Provider>
      </PostsContext.Provider>
    </Router>
  );
}

export default App;
