import { useState } from "react";
import axios from "axios";

export default function ReportCrime() {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Please login to report a crime.");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/crime/report",
        { type, description, location },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("✅ Crime reported successfully!");
      setType("");
      setDescription("");
      setLocation("");
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Failed to report crime.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Report a Crime</h2>
        {message && <p className="text-center mb-2">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Crime Type"
            className="w-full p-2 border rounded"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-2 border rounded"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
            Report Crime
          </button>
        </form>
      </div>
    </div>
  );
}
