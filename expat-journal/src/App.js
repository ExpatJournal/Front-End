import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

//Component Imports:
import WelcomeBackForm from './components/WelcomeBackForm/WelcomeBackForm';

// Mock Data:
import DummyData from './MockData/DummyData.json';
const Data = DummyData;

function App() {
  const [userPosts, setUserPosts] = useState([]);

  const addPost = post => {};


  return (
    <div className="App">
      <WelcomeBackForm/>
    </div>
  );
}

export default App;
