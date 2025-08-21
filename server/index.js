import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connect.js";
import crimeRoutes from './routes/crime.routes.js';
import routeRoutes from "./routes/route.js";
import seedRoutes from "./routes/crime.seed.js";

// .env file load
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
//cross origin k liye taaki koi b origin conflict na aaye
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});


// Basic test route
app.get("/api/test", (req, res) => {
  res.json({message: "Backend connected successfully!"});
});

//creating /api/crime endpoint
app.use('/api/crimes', crimeRoutes);

//creating /api/seed endpoint
app.use("/api/seed", seedRoutes);

app.use("/api", routeRoutes);

//connecting database
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});

// Start server
//app.listen(PORT, () => {
//  console.log(`Server running on http://localhost:${PORT}`);
//});

