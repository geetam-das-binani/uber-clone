const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captainController");
const { isLoggedIn } = require("../middleware/authMiddleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullName.firstName")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  captainController.register,
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  captainController.login,
);

router.get("/profile", isLoggedIn, captainController.profile);

router.get("/logout", isLoggedIn, captainController.logout);

module.exports = router;
