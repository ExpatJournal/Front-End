import React from 'react'

const FeedCard = ({ user, content, location, img }) => {
  // console.log(user);

  return(

    <div className="feed-card">
      <div className="feed-img-wrapper">
        <img src={img}/>
      </div>
      <h4>{user}</h4>
      <h5>{location} <i class="far fa-compass"></i></h5>
      <p>{content}</p>
    </div>

  )
}
export default FeedCard
