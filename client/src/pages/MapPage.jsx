// src/pages/MapPage.jsx

import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const LocationSelector = ({ setLatLng }) => {
  useMapEvents({
    click(e) {
      setLatLng([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

const ReportCrimePage = () => {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    severity: "",
    address: "",
    date: "",
  });

  const [latLng, setLatLng] = useState([28.6139, 77.209]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const crimeData = {
      ...formData,
      location: {
        lat: latLng[0],
        lng: latLng[1],
        address: formData.address,
      },
      reportedBy: "Anonymous",
    };

    try {
      await axios.post("http://localhost:5000/api/crimes", crimeData);
      alert("Crime reported successfully!");
    } catch (error) {
      console.error("Error reporting crime:", error);
      alert("Failed to report crime.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      
      {/* Crime Report Form */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Report a Crime</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">

          {/* Type Dropdown */}
          <div>
            <label className="block mb-1 font-semibold">Crime Type</label>
            <select name="type" required className="w-full p-2 border rounded" onChange={handleChange}>
              <option value="">Select type</option>
              <option value="Theft">Theft</option>
              <option value="Assault">Assault</option>
              <option value="Burglary">Burglary</option>
              <option value="Harassment">Harassment</option>
              <option value="Vandalism">Vandalism</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Severity Dropdown */}
          <div>
            <label className="block mb-1 font-semibold">Severity</label>
            <select name="severity" required className="w-full p-2 border rounded" onChange={handleChange}>
              <option value="">Select severity</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-semibold">Address</label>
            <input type="text" name="address" placeholder="e.g. Connaught Place, Delhi" required
              className="w-full p-2 border rounded" onChange={handleChange} />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <textarea name="description" placeholder="Describe the incident..." required
              className="w-full p-2 border rounded" onChange={handleChange}></textarea>
          </div>

          {/* Date */}
          <div>
            <label className="block mb-1 font-semibold">Date</label>
            <input type="date" name="date" required className="w-full p-2 border rounded" onChange={handleChange} />
          </div>

          {/* Auto-filled Lat/Lng */}
          <div>
            <label className="block mb-1 font-semibold">Latitude</label>
            <input type="text" value={latLng[0]} readOnly className="w-full p-2 border rounded bg-gray-100" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Longitude</label>
            <input type="text" value={latLng[1]} readOnly className="w-full p-2 border rounded bg-gray-100" />
          </div>

          {/* Submit */}
          <div className="text-center mt-4">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Submit Report
            </button>
          </div>
        </form>
      </div>

      {/* Map Section */}
      <div className="h-[600px] rounded-xl shadow-md overflow-hidden">
        <MapContainer center={latLng} zoom={12} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="© OpenStreetMap contributors"
          />
          <LocationSelector setLatLng={setLatLng} />
          <Marker position={latLng}></Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default ReportCrimePage;

