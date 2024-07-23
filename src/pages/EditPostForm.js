// src/components/EditPostForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditPostForm = ({ postId, onPostUpdated }) => {
    const [post, setPost] = useState({ title: '', content: '', author: '' });

    useEffect(() => {
        // Fetch the current post data
        axios.get(`http://localhost:5000/api/posts/${postId}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                //console.log('Post ID here===>', postId);
                console.error('Error fetching post:', error);
            });
    }, [postId]);

    //onClick update button...
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost(prevState => ({ ...prevState, [name]: value }));
    };

    //Form submission handling...
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/posts/${postId}`, post)
            .then(response => {
                console.log(response.data);
                onPostUpdated();
            })
            .catch(error => {
                console.error('Error updating post:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" name="title" value={post.title} onChange={handleChange} />
            </div>
            <div>
                <label>Content:</label>
                <textarea name="content" value={post.content} onChange={handleChange}></textarea>
            </div>
            <div>
                <label>Author:</label>
                <input type="text" name="author" value={post.author} onChange={handleChange} />
            </div>
            <button type="submit">Update Post</button>
        </form>
    );
};

export default EditPostForm;
