import React, { useEffect, useState } from "react";
import axios from 'axios'
import CommentForm from './CommentForm';
import { Link } from "react-router-dom";
import FeedCard from './FeedCard';

//component import
// import SideBar from '../HamburgerMenu/HamburgerMenu';

export default function PhotoPage(props){
    console.log('OBJ DATA:', props)
    const [post, setPost] = useState([])
  useEffect(() => {
    const id = props.match.params.id
   
      axios
        .get(`https://expatjournal.herokuapp.com/api/posts/${id}`)
        .then(response => {
          console.log(response)
          setPost(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
   
  }, []);
    
    return(
        <div>
            <section>
         
                <input type='text' name='search' placeholder='search'></input>
               <div className = "photopage-content">
               <div className="Image-container"> 
                     <Link to="../feed"> <button>back</button> </Link>
                     
                      <FeedCard  user={post.username} content={post.post} location={post.location} img={post.media.url} key={post.id}/>
    
                    </div>
            <CommentForm />
            
              </div>
            </section>
         </div>
    );
};