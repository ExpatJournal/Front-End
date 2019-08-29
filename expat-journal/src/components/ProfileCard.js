import React from "react";

const ProfileCard = props => {
  // console.log(user);
  const goToEdit = () => {
    props.history.push(`/edit/${props.post.id}`);
  };

  return (
    <div className="feed-card">
      <div className="post-img-wrapper">
        <img src={props.post.imgURL} />
      </div>
      <div className="button-container">
        <button className="edit" onClick={goToEdit}>
          Edit
        </button>
        <button className="delete">&times;</button>
      </div>
    </div>
  );
};
export default ProfileCard;
