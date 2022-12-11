const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  userUpdateProfile,
  fetchUsersCtrl,
} = require("../controllers/userController");

router.post("/", registerUser);

router.post("/login", loginUser);

const { protect } = require("../middleware/authMiddleware");

// router.get("/getAllUsers", fetchUsersCtrl);

router.get("/me", protect, getMe);

router.post("/profile", protect, userUpdateProfile)

module.exports = router;
