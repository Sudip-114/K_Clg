import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <h1>Katalogue</h1>
      <p>Choose your role to continue:</p>
      <div className="buttons">
        <button onClick={() => navigate("/student")}>I am a Student</button>
        <button onClick={() => navigate("/society")}>I am a Society Head</button>
      </div>
    </div>
  );
}
