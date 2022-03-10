import axios from "axios";

const apiUrl = "https://dummyapi.io/data/v1/post";

export const getPosts = async () =>
  await axios
    .get(apiUrl, { headers: { "app-id": "622a5d74300efd18e6ee5f4b" } })
    .then((reponse) => {
      return reponse.json;
    });

export const getPostDetails = async (postId) =>
  await axios
    .get(`${apiUrl}/${postId}`, {
      headers: { "app-id": "622a5d74300efd18e6ee5f4b" },
    })
    .then((reponse) => {
      return reponse.json;
    });

export const addPost = (post) =>
  fetch("http://localhost:5000/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const updatePost = (post) =>
  fetch(`http://localhost:5000/posts/${post.id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

export const deletePost = (post) =>
  fetch(`http://localhost:5000/posts/${post.id}`, {
    method: "DELETE",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
