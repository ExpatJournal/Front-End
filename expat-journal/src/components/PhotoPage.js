import React, { useEffect, useState } from "react";
import axios from 'axios'
import CommentForm from './CommentForm';
import { Link } from "react-router-dom";
import FeedCard from './FeedCard';
import HamburgerNav from './HamburgerNav';
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
          <div className="explore-header">
              <HamburgerNav />  
              <p>Explore</p>
          </div>
                <div className = "photopage-content">
                      {/* <input type='text' name='search' placeholder='search'></input> */}
                 <div>
                      <div><Link to="../feed"> <button>back</button> </Link></div>
                         <div className="Image-container"> 
                             <FeedCard user={post.username} content={post.post} location={post.location} img={post.imgURL} key={post.id} />
                         </div>
                 </div>
                       <div className="comment-form-container">
                           <CommentForm />
                       </div>


                </div>
                     
                     
     </div>                
    
                   
          
            
            
           
        
    );
};