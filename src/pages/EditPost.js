//import React from "react";
import React, { useState, useEffect } from 'react';
import axios from "axios";

function EditPost(postId, onPostUpdated){
    
    const [post, setPost] = useState({ title: '', author: '', content: ''});

    useEffect(() =>{
        //Fetched the current post data here....
        axios.get(`http://localhost:5000/api/posts/${postId}`)
             .then(response => {
                   setPost(response.data);
             })
             .catch(error => {
                console.error('Error Fetching post', error);
             });
    }, [postId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost(prevState => ({ ...prevState, [name]: value }));
    };
    //Updating the post data.
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/posts/${postId}`, post)
             .then(response => {
                console.log(response.data);
                onPostUpdated;
             })
             .catch(error => {
                console.error('Error Updating at post', error);
             });
    };


    return(
        <div className="main-edit-post">
            <form onClick={handleSubmit}>
                <div>
                    <label for="title">Title:</label>
                    <input type="text" name="title" id="title" value={post.title} onChange={handleChange} />
                </div>
                <div>
                    <label for="title">Author:</label>
                    <input type="text" name="author" id="author" value={post.author} onChange={handleChange} />
                </div>
                <div>
                    <label for="title">Content:</label>
                    <textarea name="content" id="content" value={post.content} onChange={handleChange}></textarea>
                </div>
            </form>
        </div>
    );
}

export default EditPost;