import React, { useState, useEffect } from "react";
import SignUp from './components/SignUp'
import PhotoPage from './components/PhotoPage/PhotoPage';
import DummyData from './DummyData'
import "./App.css";

//Component Imports:
import LogInForm from './components/WelcomeBackForm/LogInForm';

// Mock Data:
import DumData from './MockData/DumData.json';
const Data = DumData;
const PostData = DummyData;

function App() {
  const [userPosts, setUserPosts] = useState([]);

  const addPost = post => {};


  return (
    <div className="App">
      {/* <LogInForm/>
      <SignUp/> */}

     <PhotoPage data={PostData}/>

    </div>
  );
}

export default App;
