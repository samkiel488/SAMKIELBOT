const express = require("express");
const {
  register,
  login,
  verifyToken,
  updateProfile,
} = require("../controllers/authController");
const { protect } = require("../utils/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/verify", protect, verifyToken);
router.put("/profile", protect, updateProfile);

module.exports = router;
