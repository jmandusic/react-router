import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import PostForm from "../PostForm";
import Loading from "../../Loading";

import { getPostDetails, updatePost } from "../../../services/data";
import route from "../../../constants/route";

const PostEdit = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    getPostDetails(id).then((response) => setPost(response));
  }, []);

  const handleUpdatePost = (editedPost) => {
    updatePost(editedPost).then(() => setIsUpdated(true));
  };

  if (isUpdated) {
    return <Navigate to={route.posts} />;
  }

  if (!post) {
    return <Loading />;
  }

  return <PostForm onSubmit={handleUpdatePost} post={post} />;
};

export default PostEdit;
