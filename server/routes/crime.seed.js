// routes/crime.seed.js
import express from 'express';
import Crime from '../models/crime.model.js';
const router = express.Router();

router.post("/seed", async (req, res) => {
  try {
    await Crime.create([
      {
        type: "Robbery",
        description: "Bag snatched on street",
        location: { lat: 28.6139, lng: 77.2090 },
        date: new Date(),
      },
    ]);
    res.send({ success: true });
  } catch (e) {
    res.send({ success: false, error: e.message });
  }
});

export default router;
