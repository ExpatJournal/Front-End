import React, { useState, useEffect } from "react";
import SignUp from './components/SignUp'
import "./App.css";

function App() {
  const [userPosts, setUserPosts] = useState([]);

  const addPost = post => {};
  return (
    <div className="App">
      <div>Test</div>
      <SignUp />
    </div>
  );
}

export default App;
