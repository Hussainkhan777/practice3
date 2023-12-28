import { useEffect, useState } from "react";
import { APIs } from "../const/APIs";
// import Post from "./Post";
import { Link } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const response = await fetch(APIs.POSTS.getAllPosts);
    const data = await response.json();

    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <Link
            key={post.id}
            to={`/${post.id}`}
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            {post.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Posts;
