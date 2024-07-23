import axios from "axios";
import React, { useState } from "react";

function CreatePost(){

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/createpost', {
                title,
                author,
                content
            }); 
            //Message on post creation...            
            document.getElementById("message").innerHTML +=`<h3>` + response.data + `</h3>`;
            setTitle('');
            setAuthor('');
            setContent('');
        }catch (error){
            //console.error('There was an error creating the post', error);
            document.getElementById("message").innerHTML +=`There was an error creating the post` + error;
        }
    }; 
  
    return(
        <div className="create-post-main">
            <div className="message" id="message"></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Post Title:</label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Post Author:</label>
                    <input type="text" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div>
                    <label>Post Content:</label>
                    <textarea name="content" value={content} onChange={(e) => setContent(e.target.value)} required ></textarea>
                </div>
                <div>
                    <button type="submit">Insert Post</button>
                </div>
            </form>
        </div>
    );
}
export default CreatePost;