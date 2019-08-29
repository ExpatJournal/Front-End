import React from 'react'


const PhotoPageCard = ({ user, content, location, img }) => {
    // console.log(user);
  
    return(
  
      <div className="PhotoPage-card">
        <div className="PhotoPage-img-wrapper">
          <img src={img}/>
        </div>
        <h4>{user}</h4>
        <h5>{location} <i className="far fa-compass"></i></h5>
        <p>{content}</p>
      </div>
  
    )
  }
  export default PhotoPageCard;
  