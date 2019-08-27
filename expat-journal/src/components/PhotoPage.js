import React, { useContext, useState } from 'react'
import { PostsContext } from '../contexts/PostsContext'
import { Link } from "react-router-dom";
import FeedCard from './FeedCard'
import DummyData from '../DummyData';

const PhotoPage = (props) => {
     
    
    const [post, setPost] = useState([])
  
     
  
    return(
    <div className="feed-wrapper">
      {console.log(post.username)}
        <FeedCard user={post.username} content={post.content} location={post.location} img={post.imgURL} key={post.id} />
      
    </div>
    )
  }
  export default PhotoPage


