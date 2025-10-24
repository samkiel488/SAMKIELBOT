const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const deployRoutes = require("./routes/deploy");
const updateRoutes = require("./routes/update");
const { errorHandler } = require("./utils/errorHandler");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/deploy", deployRoutes);
app.use("/api/update", updateRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Run backend API only (for both dev and production in this setup)
const server = app.listen(PORT, () => {
  console.log(`Backend API server running on port ${PORT}`);
});

// Handle EADDRINUSE error
server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(
      `Port ${PORT} is already in use. Please try a different port or free up the port.`
    );
    process.exit(1);
  } else {
    console.error("Server error:", err);
  }
});
