// The POST method is used to send data to the server to create a new resource. It’s a fundamental part of web development that deals with submitting forms, uploading files, or creating new data entries in a database.

import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = { title, body };
        axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
            .then(response => {
                alert(`New Post Created with ID: ${response.data.id}`);
            })
            .catch(error => {
                console.error('Error creating a post:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"></textarea>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default CreatePost;


// This example demonstrates a typical form in React for submitting data. The useState hooks track form inputs, and the handleSubmit function sends a POST request with the form data.

// Understanding the Response - A successful POST request is acknowledged by the server with a 201 Created status code. The response generally contains the data of the newly created resource, including any server-generated fields like an ID. This feedback is crucial for confirming the creation and updating the UI accordingly.