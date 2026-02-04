const { createUser } = require("../services/userService");
const { validationResult } = require("express-validator");
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
