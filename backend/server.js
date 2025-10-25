const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const next = require("next");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const deployRoutes = require("./routes/deploy");
const updateRoutes = require("./routes/update");
const { errorHandler } = require("./utils/errorHandler");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

// ✅ Detect environment properly
const dev = process.env.NODE_ENV !== "production";
const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/deploy", deployRoutes);
app.use("/api/update", updateRoutes);

// ✅ Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// ✅ Serve frontend only in production
if (!dev) {
  const nextApp = next({
    dev: false,
    dir: path.join(__dirname, "../frontend"),
  });
  const handle = nextApp.getRequestHandler();

  nextApp.prepare().then(() => {
    app.get("*", (req, res) => handle(req, res));
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  });
} else {
  // ✅ Development mode — backend only
  app.listen(PORT, () =>
    console.log(`Backend API running on http://localhost:${PORT}`)
  );
}
