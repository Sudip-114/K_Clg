import React from "react";
import Navbar from "./Navbar";
import PostCard from "./PostCard";
import "../styles/dashboard.css";

export default function StudentDashboard() {
  return (
    <div>
      <Navbar user="student" />
      <div className="dashboard">
        <h2>Explore Societies</h2>
        <PostCard title="IOT Workshop" content="Hands-on IoT session this Friday." />
        <PostCard title="Kalakaar Fest" content="Drama & art showcase." />
      </div>
    </div>
  );
}
