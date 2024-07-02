import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar.jsx";
import Homepage from "./pages/Homepage.jsx";
import ResourceLibrary from "./pages/ResourceLibrary.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resource-library" element={<ResourceLibrary />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
