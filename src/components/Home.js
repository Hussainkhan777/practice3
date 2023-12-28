import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/login" style={{ display: "block", marginBottom: "0.5rem" }}>
        Login
      </Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
}

export default Home;
