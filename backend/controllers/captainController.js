
const { createCaptain, authLogin } = require("../services/captainService");
const { validationResult } = require("express-validator");
const BlacklistToken = require("../models/blacklisttoken");
exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      fullName: { firstName, lastName },
      email,
      password,
      vehicle
     
    } = req.body;

    const captain = await createCaptain({
      firstName,
      lastName,
      email,
      password,
      vehicle,
    });
    const jwtToken = await captain.generateJWT();
    res.status(201).json({ captain, jwtToken });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const captain = await authLogin({ email, password });
    const jwtToken = await captain.generateJWT();
    res
      .cookie("captainToken", jwtToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json({ captain, jwtToken });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.profile = async (req, res) => {
  try {
    const captain = req.captain;
    res.status(200).json({ captain });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.logout = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await BlacklistToken.create({ token });
    res
      .clearCookie("token")
      .status(200)
      .json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
