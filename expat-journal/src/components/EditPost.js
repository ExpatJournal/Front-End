import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import MobileHeader from "./MobileHeader";

const EditPost = props => {
  console.log("edit props: ", props);
  const [updatedPost, setUpdatedPost] = useState({});
  const [imgURL, setImgURL] = useState("");
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
        setImgURL(res.data.media[0].url);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const sendUpdate = e => {
    e.preventDefault();
    editPost(updatedPost);
    props.history.push("/profile");
  };

  console.log("post to edit: ", updatedPost);

  return (
    <div className="edit-page">
      <MobileHeader />
      <h3>Edit Post</h3>
      <div className="edit-container">
        <img src={imgURL} />
        <div className="edit-text">
          <h4>Update Caption</h4>
          <textarea
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
        <button className="update" onClick={sendUpdate}>
          Update
        </button>
        <button className="cancel">Cancel</button>
      </div>
    </div>
  );
};

export default EditPost;
