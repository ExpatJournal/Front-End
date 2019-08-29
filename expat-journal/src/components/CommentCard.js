import React from "react";

const CommentCard = props => {
    
    return (
        <div className="comment-card">
     <h3 className="Comment-header"> Comments</h3>
        <h5> Username {props.username}</h5>
        <p> {props.comment}</p>
</div>
    );
}

export default CommentCard;