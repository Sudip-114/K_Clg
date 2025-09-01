import React from "react";
import "../styles/dashboard.css";

export default function Navbar({ user }) {
  return (
    <nav className="navbar">
      <h1>Katalogue</h1>
      <ul>
        {user === "student" && <li>Explore</li>}
        {user === "society" && <li>Manage Society</li>}
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </nav>
  );
}
