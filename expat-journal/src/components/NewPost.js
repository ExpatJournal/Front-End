import React, { useCallback, useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import "./DragNDrop.css";
import DesktopHeader from "./DesktopHeader";

export default function ImageUpload(props) {
  const [newPost, setNewPost] = useState({
    title: "",
    location: "",
    post: "",
    media: [
      {
        url: "",
        caption: ""
      }
    ]
  });

  const [formCompleted, setFormCompleted] = useState(false);

  const { addPost } = useContext(UserContext);

  const changeHandler = e => {
    console.log(e.target.value);
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
    if (
      newPost.title !== "" &&
      newPost.location !== "" &&
      newPost.post !== "" &&
      newPost.media[0].url !== ""
    ) {
      setFormCompleted(true);
    }
  };

  const handleMediaChange = e => {
    setNewPost({ ...newPost, media: [{ url: e.target.value }] });
    if (
      newPost.title !== "" &&
      newPost.location !== "" &&
      newPost.post !== "" &&
      newPost.media[0].url !== ""
    ) {
      setFormCompleted(true);
    }
  };

  //   const captionhandleMediaChange = e => {
  //     setNewPost({ ...newPost, media: [{ caption: e.target.value }] });
  //   };

  const handleSubmit = e => {
    e.preventDefault();
    if (newPost.media[0].url === "") {
      alert("Please add an image URL before submitting.");
    } else {
      addPost(newPost);
      props.history.push("/profile");
    }
    console.log("new post: ", newPost);
  };

  return (
    <>
      <DesktopHeader />
      <div className="pageContainer">
        <div className="pageText">
          <h2>Upload an Image</h2>
        </div>
        <section className="centerContainer">
          <div className="dragNDrop">
            <img
              className="uploadIcon"
              height="50"
              src="images/uploadButton.png"
              alt="This is an Upload Button"
            />
            <label className="imgLabel">
              Image Url Image Url
              <input
                className="imgInput"
                type="text"
                placeholder="paste img url here"
                value={newPost.media[0].url}
                onChange={handleMediaChange}
              ></input>
            </label>
          </div>
          <section className="forms">
            <label className="label">
              {" "}
              Photo Title
              <input
                className="input"
                name="title"
                type="text"
                placeholder="Name this Photo"
                value={newPost.title}
                onChange={changeHandler}
              />
            </label>
            {/* <label className='label'>Photo Caption
                            <input  
                                className="input" 
                                name="caption" 
                                type="text" 
                                placeholder="Add A Caption"
                                value={newPost.media[0].caption}
                                onChange={captionhandleMediaChange}
                            />
                        </label> */}
            <label className="label">
              {" "}
              Photo Location
              <input
                className="input"
                name="location"
                type="text"
                placeholder="Where was this photo taken..."
                value={newPost.location}
                onChange={changeHandler}
              />
            </label>
            <label className="label">
              {" "}
              Add A Description
              <input
                className="input"
                name="post"
                type="text"
                placeholder="Type here..."
                value={newPost.post}
                onChange={changeHandler}
              />
            </label>
          </section>
        </section>
        <div className="btnContainer">
          <button
            onClick={handleSubmit}
            type="submit"
            className={"btn " + (formCompleted ? "form-complete" : "")}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
