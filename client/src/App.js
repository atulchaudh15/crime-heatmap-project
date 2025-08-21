import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import SafeRoute from "./pages/SafeRoute"; 
function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-100 min-h-screen text-gray-800">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/safe-route" element={<SafeRoute />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






