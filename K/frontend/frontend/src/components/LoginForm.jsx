// src/components/LoginForm.jsx
import React, { useState } from "react";
import "../styles/login.css";

export default function LoginForm({ onLogin }) {
  const [societyName, setSocietyName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (societyName.trim() && password.trim()) {
      onLogin(societyName);
    } else {
      alert("Please enter society name and password");
    }
  };

  return (
    <div className="login-form">
      <h2>Society Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Society Name"
          value={societyName}
          onChange={(e) => setSocietyName(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
