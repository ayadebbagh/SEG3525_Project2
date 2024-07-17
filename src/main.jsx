import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar.jsx";
import Homepage from "./pages/Homepage.jsx";
import ResourceLibrary from "./pages/ResourceLibrary.jsx";
import Discover from "./pages/Discover.jsx";
import Community from "./pages/Community.jsx";
import Profile from "./pages/Profile.jsx";
import FAQ from "./pages/FAQ.jsx";
import ComingSoon from "./pages/ComingSoon.jsx";
import { LanguageProvider } from "./components/LanguageProvider.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resource-library" element={<ResourceLibrary />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="coming-soon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </React.StrictMode>
);
