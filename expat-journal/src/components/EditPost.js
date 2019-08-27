import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

const EditPost = props => {
  console.log("edit props: ", props);
  const [updatedPost, setUpdatedPost] = useState({});
  const { editPost } = useContext(UserContext);

  useEffect(() => {
    getPost(props.match.params.id);
  }, []);

  const getPost = id => {
    axios
      .get(`https://expatjournal.herokuapp.com/api/posts/${id}`)
      .then(res => {
        console.log("getPost res: ", res);
        setUpdatedPost(res.data);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  console.log("post to edit: ", updatedPost);

  return (
    <div className="edit-page">
      <h3>Edit Post</h3>
      <div className="edit-container">
        <img src="" />
        <div className="edit-text">
          <h4>Update Caption</h4>
          <input
            type="text"
            name="post"
            value={updatedPost.post}
            onChange={e =>
              setUpdatedPost({ ...updatedPost, post: e.target.value })
            }
          />
        </div>
      </div>
      <div className="edit-buttons">
        <button onClick={e => editPost(updatedPost, e)}>Update</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default EditPost;
