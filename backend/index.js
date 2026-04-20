require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const passport = require("passport");
const cookieSession = require("cookie-session");

// Import routes
const authRoutes = require("./routes/auth");
const moviesRoutes = require("./routes/movies");

require("./passport"); // for google auth strategy if used

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", // Vite's default port
  credentials: true
}));
app.use(helmet());

app.use(cookieSession({
  name: "session",
  keys: [process.env.SESSION_SECRET || "netflix123"],
  maxAge: 24 * 60 * 60 * 100
}));

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", moviesRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/netstream")
  .then(() => console.log("✅ MongoDB connected!"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});