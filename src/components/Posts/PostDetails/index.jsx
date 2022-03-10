import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import Loading from "../../Loading";

import { deletePost, getPostDetails } from "../../../services/data";
import route from "../../../constants/route";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [postsScreen, setPostsScreen] = useState(false);

  useEffect(() => {
    getPostDetails(id).then((response) => setPost(response));
  }, []);

  const handlePostDelete = (post) => {
    deletePost(post).then(() => {
      setPostsScreen(true);
    });
  };

  if (postsScreen && post) {
    return <Navigate replace to={route.posts} />;
  }

  if (!post) {
    return <Loading />;
  }

  return (
    <div>
      <p>Id: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Author: {post.author}</p>

      <Link to={`${route.postEdit}/${post.id}`}>
        <button>Edit post</button>
      </Link>
      <button onClick={() => handlePostDelete(post)}>Delete post</button>
      <Link to={route.posts}>
        <button>Return to posts</button>
      </Link>
    </div>
  );
};

export default PostDetails;
