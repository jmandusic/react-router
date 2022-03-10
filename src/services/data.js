import axios from "axios";

const apiUrl = "http://localhost:5000/posts";

export const getPosts = async () =>
  await axios.get(apiUrl).then((response) => {
    return response.data;
  });

export const getPostDetails = async (post) =>
  await axios.get(`${apiUrl}/${post}`).then((response) => {
    return response.data;
  });

export const addPost = async (post) =>
  await axios.post(apiUrl, post).then((response) => {
    return response.data;
  });

export const updatePost = async (post) =>
  await axios.put(`${apiUrl}/${post.id}`, post).then((response) => {
    return response.data;
  });

export const deletePost = async (post) =>
  await axios.delete(`${apiUrl}/${post.id}`, post).then((response) => {
    return response.data;
  });
