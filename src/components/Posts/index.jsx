import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import PostAdd from "./PostAdd";
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
      <Route path={`${route.postEdit}/:id`} element={<PostEdit />} />
      <Route path={route.notFound} element={<NotFound />} />
      <Route path="*" element={<Navigate to={route.notFound} />} />
    </Routes>
  );
};

export default Posts;
