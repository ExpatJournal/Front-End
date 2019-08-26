import React, { useState, useEffect } from "react";
import SignUp from './components/SignUp'
import DummyData from './DummyData'
import "./App.css";

function App() {
  const [userPosts, setUserPosts] = useState([]);
  console.log(DummyData);

  const addPost = post => {};
  return (
    <div className="App">
      <SignUp />
    </div>
  );
}

export default App;
