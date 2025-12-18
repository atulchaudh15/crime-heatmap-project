// client/src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Route, Bell } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Crime Heatmap & Safe Route Recommender
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Stay safe in your city with real-time crime insights and AI-powered
          safe route recommendations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/map")}
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Explore Map
          </button>

          <button
            onClick={() => navigate("/safe-route")}
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          >
            Find Safe Route
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features 🚀</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <MapPin className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Interactive Crime Map</h3>
            <p>
              Visualize crime hotspots in your area with a dynamic and interactive heatmap.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <Route className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safe Route Finder</h3>
            <p>
              Get AI-powered safest route suggestions using advanced pathfinding algorithms.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <Bell className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location Alerts</h3>
            <p>
              Stay updated with alerts on crime-prone areas and avoid risky zones in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to explore your city safely?
        </h2>
        <button
          onClick={() => navigate("/safe-route")}
          className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
        >
          Find Safe Route Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>Crime Heatmap. Built with ❤️ for safer cities.</p>

        <div className="flex justify-center gap-6 mt-2">
          {/* Instead of <a href="#">, using buttons to avoid warnings */}
          <button
            onClick={() => navigate("/about")}
            className="hover:text-white transition"
          >
            About
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="hover:text-white transition"
          >
            Contact Us
          </button>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
