import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { APIs } from "../const/APIs";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  async function getPost() {
    const response = await fetch(APIs.POSTS.getSinglePost(id));
    const data = await response.json();
    setPost(data);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}

export default Post;
