import React, { useState, useEffect } from "react";
import SignUp from './components/SignUp'
import PhotoPage from './components/PhotoPage/PhotoPage';
import "./App.css";

//Component Imports:
import LogInForm from './components/WelcomeBackForm/LogInForm';

// Mock Data:
import DummyData from './MockData/DummyData.json';
const Data = DummyData;
console.log(Data);

function App() {
  const [userPosts, setUserPosts] = useState([]);

  const addPost = post => {};


  return (
    <div className="App">
      {/* <LogInForm/>
      <SignUp/> */}
      
      {data.map((value, key)=> {
        return(
        <PhotoPage dataprops={Data}/>
        )
        })} 

    </div>
  );
}

export default App;
