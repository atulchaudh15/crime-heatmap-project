import express from "express";
import fetch from "node-fetch";

const router = express.Router();
//Example->
// Input: { start: "Noida", end: "Delhi" }
// Output: { start: {lat, lon}, end: {lat, lon} }

router.post("/safe-route", async (req, res) => {
  try {
    const { start, end } = req.body;

    if (!start || !end) {
      return res.status(400).json({ error: "Start and End locations are required" });
    }

    const getCoordinates = async (location) => {
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
      const response = await fetch(url, {
        headers: { "User-Agent": "crime-heatmap-app" }, // required by OSM
      });
      const data = await response.json();
      if (data.length === 0) throw new Error(`No results for ${location}`);
      return { lat: data[0].lat, lon: data[0].lon };
    };

    const startCoords = await getCoordinates(start);
    const endCoords = await getCoordinates(end);

    // For now we just return both coordinates (later we can run shortest path algo here)
    res.json({
      start: startCoords,
      end: endCoords,
    });

  } catch (err) {
    console.error("Error in /safe-route:", err.message);
    res.status(500).json({ error: "Failed to fetch safe route" });
  }
});

export default router;
