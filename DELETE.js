// For the DELETE operation, we’ll display a list of posts, each with a ‘Delete’ button. Clicking the button will send a DELETE request to remove that specific post.

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeletePost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            });
    }, []);

    const handleDelete = (postId) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(() => {
                setPosts(posts.filter(post => post.id !== postId));
                console.log(`Post with ID ${postId} deleted successfully`);
            })
            .catch(error => {
                console.error('Error deleting the post:', error);
            });
    };

    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <button onClick={() => handleDelete(post.id)}>Delete Post</button>
                </div>
            ))}
        </div>
    );
};

export default DeletePost;


// In this DELETE example, each post has a button attached to it. Clicking the button triggers handleDelete, which sends a DELETE request for that specific post. The post list is then updated to reflect the deletion.

// Understanding the Response
// For DELETE requests, the typical successful response is a 200 OK or 204 No Content status code, often with no return data. This indicates that the resource was successfully deleted. Some APIs might return the deleted resource's data as part of the response, which can be useful for confirming what was deleted or for record-keeping purposes in the application.

// In case of failure, such as attempting to delete a resource that doesn’t exist or one that can’t be deleted due to server rules, the server responds with appropriate error status codes like 404 Not Found or 403 Forbidden. Handling these errors is essential to provide clear feedback to the user, ensuring they understand why the operation didn't succeed.

