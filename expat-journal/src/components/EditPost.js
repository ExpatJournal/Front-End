import React, { useState, useEffect } from "react";
import axios from "axios";

const EditPost = props => {
  console.log("edit props: ", props);
  const [updatedPost, setUpdatedPost] = useState({});

  useEffect(() => {
    getPost(props.match.params.id);
  }, []);

  const getPost = id => {
    axios.get(
      `https://expatjournal.herokuapp.com/api/posts/${id}`
        .then(res => {
          console.log("getPost res: ", res);
        })
        .catch(err => {
          console.log(err.response);
        })
    );
  };

  return (
    <div className="edit-page">
      <h3>Edit Post</h3>
      <div className="edit-container">
        <img src="" />
        <div className="edit-text">
          <h4>Update Caption</h4>
          <input type="text" name="content" />
        </div>
      </div>
      <div className="edit-buttons">
        <button>Update</button>
        <button>Cancel</button>
      </div>
    </div>
  );
};

export default EditPost;
