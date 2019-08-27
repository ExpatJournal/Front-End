import React from 'react';
import CommentForm from '../comment';
import FeedCard from '../FeedCard';

//component import
// import SideBar from '../HamburgerMenu/HamburgerMenu';

export default function PhotoPage(props){
    console.log('OBJ DATA:', props)
    
    return(
        <div>
            <section>
         
                <input type='text' name='search' placeholder='search'></input>
               <div className = "PhotoPage-content">
                 <div>
                     <FeedCard/>
                 </div>
                 <div>
            <CommentForm />
            </div>
              </div>
            </section>
        </div>
    );
};