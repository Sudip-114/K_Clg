import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import StudentDashboard from "./components/StudentDashboard";
import SocietyDashboard from "./components/SocietyDashboard";
import "./styles/main.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/society" element={<SocietyDashboard />} />
      </Routes>
    </Router>
  );
}
