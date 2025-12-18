import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/connect.js";
import crimeRoutes from "./routes/crime.routes.js";
import routeRoutes from "./routes/route.js";
import seedRoutes from "./routes/crime.seed.js";
import authRoutes from "./routes/auth.routes.js"; // ✅ NEW

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected successfully!" });
});

app.use("/api/crimes", crimeRoutes);
app.use("/api/seed", seedRoutes);
app.use("/api", routeRoutes);
app.use("/api/auth", authRoutes);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});


