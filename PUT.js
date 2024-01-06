// PUT and PATCH methods are employed for updating existing resources. The distinction lies in their approach: PUT is used for replacing an entire resource, while PATCH is for making partial updates.

// To update a post, we’ll create a simple interface with a button. When clicked, it sends a PUT request with a hardcoded payload to update a specific post.

import React from "react";
import axios from "axios";

const UpdatePost = () => {
  const postId = 1; // Assuming we are updating the post with ID 1
  const updatedData = { title: "New Title", body: "Updated body text" };

  const handleUpdate = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedData)
      .then((response) => {
        console.log("Updated Post:", response.data);
      })
      .catch((error) => {
        console.error("Error updating the post:", error);
      });
  };

  return (
    <div>
      <button onClick={handleUpdate}>Update Post</button>
    </div>
  );
};

export default UpdatePost;

// In this example, the handleUpdate function triggers a PUT request with predefined updatedData. This setup simulates updating a post, and upon success, logs the updated post data to the console.

// Understanding the Response
// When you send a PUT request to update a resource, the server’s response can vary based on the API’s design. Typically, a 200 OK status code is returned, along with the updated resource data. This response confirms that the update was successful and allows you to see the changes made. In some cases, if the update doesn't return any content, you might receive a 204 No Content status. It's important to handle these responses in your application to confirm the update to the user and to update the UI accordingly.

// Errors in PUT requests could occur due to various reasons like invalid data sent in the request or trying to update a non-existent resource. These errors are usually indicated by 4xx status codes like 400 Bad Request or 404 Not Found. Proper error handling is crucial for informing users about what went wrong.