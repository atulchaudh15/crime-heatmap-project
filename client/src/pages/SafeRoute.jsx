import React, { useState } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Polyline, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function SafeRoute() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [route, setRoute] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/safe-route", {
        start,
        end,
      });

      if (res.data.start && res.data.end) {
        const path = [
          [parseFloat(res.data.start.lat), parseFloat(res.data.start.lon)],
          [parseFloat(res.data.end.lat), parseFloat(res.data.end.lon)],
        ];
        setRoute(path);
      } else {
        alert("Could not fetch route");
      }
    } catch (err) {
      console.error(err);
      alert("Error fetching route");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Safe Route Finder</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow p-6 rounded-lg space-y-4"
      >
        <input
          type="text"
          placeholder="Enter Start Location"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Enter End Location"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Find Safe Route
        </button>
      </form>

      {route.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Suggested Safe Route
          </h3>
          <MapContainer
            center={route[0] || [28.6139, 77.209]}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
            className="rounded shadow"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Route polyline */}
            <Polyline positions={route} color="blue" />

            {/* Start Marker */}
            <Marker position={route[0]}>
              <Popup>Start</Popup>
            </Marker>

            {/* End Marker */}
            <Marker position={route[route.length - 1]}>
              <Popup>End</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
}

export default SafeRoute;
