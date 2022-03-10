import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Loading from "../../Loading";

import { getPosts } from "../../../services/data";
import route from "../../../constants/route";

const PostList = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts().then((response) => setPosts(response));
  }, []);

  if (!posts) {
    return <Loading />;
  }

  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} to={`${route.posts}/${post.id}`}>
          <div>Title: {post.title}</div>
        </Link>
      ))}
      <Link to={route.postAdd}>
        <button>Add new post</button>
      </Link>
    </div>
  );
};

export default PostList;
