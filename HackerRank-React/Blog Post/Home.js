import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const handleDeletePost = (idToDelete) => {
    // console.log(index);
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== idToDelete));
    setTimeout(() => {
      console.log("Updated Posts:", posts);
    }, 0);
  }

  const handlePosts = () => {
    if (!post.title || !post.description) {
      return;
    }
    const newPost = {
      id: Date.now() + Math.random(), // adds a unique id
      ...post
    };
    setPosts((prevPost) => ([...prevPost, newPost]))
    setPost({})
    setTimeout(() => {
      console.log("Updated Posts:", posts);
    }, 0);
  }
  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input post={post} setPost={setPost} />
        <button data-testid="create-button" className="mt-10" onClick={handlePosts}>
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} handleDeletePost={handleDeletePost} />
      </div>
    </div>
  );
}

export default Home;
