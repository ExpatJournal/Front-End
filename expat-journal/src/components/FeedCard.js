import React from 'react'

const FeedCard = ({ user, content, location, img }) => {
  console.log(user);

  return(

    <div className="feed-card">
      <img src={img}/>
      <h4>{user}</h4>
      <h5>{location}</h5>
      <p>{content}</p>
    </div>

  )
}
export default FeedCard
