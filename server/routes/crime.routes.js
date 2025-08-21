import express from 'express';
import Crime from '../models/crime.model.js';
import { sendSuccess, sendError } from '../utils/response.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { type, location, description, severity, date } = req.body;

    if (!type || !location || !severity) {
      return sendError(res, 'Type, location & severity are required.', 400);
    }

    const newCrime = new Crime({
      type,
      location,
      description,
      severity,
      date: date || new Date(),
    });

    await newCrime.save();
    return sendSuccess(res, 'Crime reported successfully', newCrime);

  } catch (error) {
    console.error('Error reporting crime:', error);
    return sendError(res, 'Server error while reporting crime.');
  }
});

router.get('/', async (req, res) => {
  try {
    const crimes = await Crime.find().sort({ date: -1 });
    return sendSuccess(res, 'Crimes fetched successfully', crimes);
  } catch (error) {
    console.error('Error fetching crimes:', error);
    return sendError(res, 'Failed to fetch crimes');
  }
});


export default router;

