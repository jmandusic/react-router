import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import PostForm from "../PostForm";

import { addPost } from "../../../services/data";
import route from "../../../constants/route";

const PostAdd = () => {
  const [isCreated, setIsCreated] = useState(false);

  const handleCreatePost = (post) => {
    addPost(post).then(() => setIsCreated(true));
  };

  if (isCreated) {
    return <Navigate to={route.posts} />;
  }

  return <PostForm onSubmit={handleCreatePost} />;
};

export default PostAdd;
