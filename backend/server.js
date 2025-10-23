const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const deployRoutes = require('./routes/deploy');
const updateRoutes = require('./routes/update');
const { errorHandler } = require('./utils/errorHandler');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/deploy', deployRoutes);
app.use('/api/update', updateRoutes);

// Serve frontend build in production
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/out");
  app.use(express.static(frontendPath));
  app.get("*", (req, res) => res.sendFile(path.resolve(frontendPath, "index.html")));
}

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
