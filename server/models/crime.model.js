import mongoose from 'mongoose';

const crimeSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Theft', 'Assault', 'Burglary', 'Harassment', 'Vandalism', 'Robbery', 'Murder',  'Other'],
  },
  description: {
    type: String,
    default: '',
  },
  location: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    },
    address: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  severity: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  reportedBy: {
    type: String,
    default: 'Anonymous'
  },
  verified: {
    type: Boolean,
    default: false // admin verified?
  }
});


const Crime=  mongoose.model('Crime', crimeSchema);

export default Crime
