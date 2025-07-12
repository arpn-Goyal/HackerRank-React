import React from "react";

function Input({post, setPost}) {
  const handleEvent = (name, value)=>{
    setPost((prevState)=>({
      ...prevState,
        [name]: value,
    }))
    // setPost({})
    // console.log(post);
  }
  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" name="title" type="text" placeholder="Enter Title" value={post.title || ''} data-testid="title-input" onChange={(e)=> handleEvent(e.target.name, e.target.value)} />
      <textarea className="mt-10 w-100" name="description" placeholder="Enter Description" value={post.description || ''} data-testid="description-input" onChange={(e)=> handleEvent(e.target.name, e.target.value)} />
    </div>
  );
}

export default Input;
