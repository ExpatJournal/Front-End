import React from "react";
import placeholder from "../placeholder.JPG";

const ProfileCard = props => {
  // console.log(user);
  const goToEdit = () => {
    props.history.push(`/edit/${props.post.id}`);
  };
  console.log("profile card props: ", props);
  // console.log("profile card url", props.post.media[0].url);

  const deletePost = () => {};

  return (
    <div className="feed-card">
      <div className="feed-img-wrapper">
        {props.post.media[0] ? (
          <img src={props.post.media[0].url} />
        ) : (
          <img src={placeholder} />
        )}
        {/* <img src={props.post.media[0].url} /> */}
      </div>
      {/* <h4>{user}</h4> */}
      <h5>
        {props.post.location} <i className="far fa-compass"></i>
      </h5>
      <p>{props.post.post}</p>
      <div className="button-container">
        <button className="edit" onClick={goToEdit}>
          Edit
        </button>
        <button
          className="delete"
          onClick={e => props.removePost(props.post.id, e)}
        >
          &times;
        </button>
      </div>
    </div>
  );
};
export default ProfileCard;
