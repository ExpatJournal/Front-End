import React, {useCallback, useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext';
import './DragNDrop.css';

export default function ImageUpload (){
    const [newPost, setNewPost] = useState({
        title: "",
        location: "",
        post: "",
        media: [{
             url: "",
             caption: "",
       }],
    });

    const { addPost } = useContext(UserContext)

    const changeHandler = e => {
        console.log(e.target.value)
        setNewPost({ ...newPost, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        addPost(newPost);
    }

    return(
        <div className='pageContainer'>
            <div className='pageText'>
                <h2>Upload an Image</h2>
            </div>
            <section className='centerContainer'>
                <div className='dragNDrop'>
                    <img className='uploadIcon' height="50"  src="images/uploadButton.png" alt="This is an Upload Button"></img>
                    <label>Image Url<input type='text' placeholder='paste img url here'></input></label>
                </div>
                <input
                    name="title"
                    type="text"
                    placeholder="Name this Photo"
                    value={newPost.title}
                    onChange={changeHandler}
                >
                </input>
                <input
                    name="location"
                    type="text"
                    placeholder="Where was this photo taken..."
                    value={newPost.location}
                    onChange={changeHandler}
                >
                </input>
                <input
                    className="input"
                    name="post"
                    type="text"
                    placeholder="Type here..."
                    value={newPost.post}
                    onChange={changeHandler}
                 />
            </section>
            <div className="btnContainer">
                 <button onClick={handleSubmit} type="submit" className="btn">Submit</button>
            </div>
        </div>
    );
};
