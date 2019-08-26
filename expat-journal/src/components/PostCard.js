import React from "react";

const PostCard = props => {
  return (
    <div className="card">
      <img src={props.post.imgURL} />
      <h5>{props.post.username}</h5>
      <p>{props.post.location}</p>
      <p>{props.post.content}</p>
    </div>
  );
};

export default PostCard;
