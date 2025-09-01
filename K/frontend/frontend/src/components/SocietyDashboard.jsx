import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import LoginForm from "./LoginForm";
import PostCard from "./PostCard";
import "../styles/dashboard.css";

export default function SocietyDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  // Fetch posts when component mounts
  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!isLoggedIn) {
    return <LoginForm onLogin={() => setIsLoggedIn(true)} />;
  }

  const handleCreatePost = () => {
    if (newPost.title && newPost.content) {
      axios.post("http://localhost:5000/api/posts", newPost)
        .then(res => {
          setPosts([res.data, ...posts]);
          setNewPost({ title: "", content: "" });
          setShowForm(false);
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <Navbar user="society" />
      <div className="dashboard">
        <h2>Society Dashboard</h2>
        <button className="create-post" onClick={() => setShowForm(!showForm)}>
          + Create Post
        </button>

        {showForm && (
          <div className="post-form">
            <input
              type="text"
              placeholder="Post Title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <textarea
              placeholder="Post Content"
              value={newPost.content}
              onChange={(e) =>
                setNewPost({ ...newPost, content: e.target.value })
              }
            />
            <button onClick={handleCreatePost}>Publish</button>
          </div>
        )}

        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
