import "./App.css";
import Login_clone from "./components/Login_clone";
import Home_clone from "./components/Home_clone";
import { Routes, Route } from "react-router-dom";

// import Posts from "./components/Posts";
// import { Routes, Route } from "react-router-dom";
// import Post from "./components/Post";
// import Login from "./components/Login";
// import Home from "./components/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home_clone />} />
      <Route path="/login_clone" element={<Login_clone />} />
    </Routes>
  );
}
