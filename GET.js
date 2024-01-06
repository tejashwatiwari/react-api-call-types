// The GET operation is used to retrieve data from a server at the specified resource. When you make a GET request, you’re asking the server to send data back to you.

// Let’s make a GET request to retrieve a list of posts from JSON Placeholder:

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Posts;


// A successful GET request typically returns a status code of 200 OK, along with the requested data, usually in JSON format. In case of failure (e.g., network issues, wrong URL), Axios will catch the error, which can be handled in the .catch block. It's crucial to handle these errors to prevent your application from crashing and to provide feedback to the user.

