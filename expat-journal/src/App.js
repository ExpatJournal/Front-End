import React, { useState, useEffect } from "react";
import SignUp from './components/SignUp'
import "./App.css";

//Component Imports:
import LogInForm from './components/WelcomeBackForm/LogInForm';

// Mock Data:
import DummyData from './MockData/DummyData.json';
const Data = DummyData;

function App() {
  const [userPosts, setUserPosts] = useState([]);

  const addPost = post => {};


  return (
    <div className="App">
      <LogInForm/>
      <SignUp/>
    </div>
  );
}

export default App;
