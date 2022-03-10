import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import PostAdd from "./PostAdd";
import PostDelete from "./PostDelete";
import PostDetails from "./PostDetails";
import PostEdit from "./PostEdit";
import PostList from "./PostList";
import NotFound from "../NotFound";

import route from "../../constants/route";

const Posts = () => {
  return (
    <Routes>
      <Route path={route.posts} element={<PostList />} />
      <Route path={route.postAdd} element={<PostAdd />} />
      <Route path={route.postDetails} element={<PostDetails />} />
      <Route path={route.postEdit} element={<PostEdit />} />
      <Route path={route.postDelete} element={<PostDelete />} />
      <Route path={route.notFound} element={<NotFound />} />
      {/* <Navigate to={route.notFound} element={<NotFound />} /> */}
    </Routes>
  );
};

export default Posts;
