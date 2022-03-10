import React, { useState } from "react";

const PostForm = ({ onSubmit, post }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [author, setAuthor] = useState(post?.author || "");

  const handleSubmit = () => {
    if (!title || !author) {
      alert("Try again!!!");
      return;
    }

    const submitPost = post ? { ...post, title, author } : { title, author };
    onSubmit(submitPost);
  };

  return (
    <div>
      <label>Title</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Author</label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PostForm;
