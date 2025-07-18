import React from "react";

function PostDisplay({ posts, handleDeletePost}) {
  return (
    <div data-testid="posts-container" className="flex wrap gap-10">
      {
        posts.map((post, index) => (
          <div className="post-box" key={index}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button onClick={(e)=> handleDeletePost(post.id)}>Delete</button>
          </div>
        ))
      }

    </div>
  );
}

export default PostDisplay;
