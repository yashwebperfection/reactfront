//import React from "react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import EditPostForm from './EditPostForm';

const Posts = ()=> {
    
    const [posts, setPosts] = useState([]);
    const [editingPostId, setEditingPostId] = useState(null);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const deletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handlePostUpdated = () => {
        setEditingPostId(null);
        fetchPosts();
    };

    return(
        <div className="blog-main">
            <h1>Blog page main...</h1>
            <div className="blog-data">
                <div className="post-info">
                    <table border="2">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {posts.map(post => (
                            <tr key={post.id}> 
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                                <td>{post.content}</td>
                                <td>
                                    <button onClick={() => setEditingPostId(post.id)}>Update</button> | 
                                    <button onClick={() => deletePost(post.id)}>Delete</button>
                                </td>
                            </tr>
                        ))} 
                        </tbody>
                    </table>
                    {editingPostId && (
                        <EditPostForm postId={editingPostId} onPostUpdated={handlePostUpdated} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Posts;