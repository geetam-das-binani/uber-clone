const { createUser, authLogin } = require("../services/userService");
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
    } = req.body;

    const user = await createUser({
      firstName,
      lastName,
      email,
      password,
    });
    const jwtToken = await user.generateJWT();
    res.status(201).json({ user, jwtToken });
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
    const user = await authLogin({ email, password });
    const jwtToken = await user.generateJWT();
    res
      .cookie("token", jwtToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json({ user, jwtToken });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
exports.profile = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({ user });
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
