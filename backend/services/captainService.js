const captainModel = require("../models/captain");
exports.createCaptain = async ({ firstName, lastName, email, password }) => {
  try {
    if (!firstName || !email || !password) {
      throw new Error("Please provide all the required fields");
    }

    const existingCaptain = await captainModel.findOne({ email });

    if (existingCaptain) {
      throw new Error("Captain already exists");
    }

    const captain = await captainModel.create({
      fullName: {
        firstName,
        lastName,
      },
      email,
      password,
    });
    return captain;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.authLogin = async ({ email, password }) => {
  try {
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
      throw new Error("Invalid email or password");
    }
    const isPasswordMatch = await captain.comparePassword(password);
    if (!isPasswordMatch) {
      throw new Error("Invalid email or password");
    }
    return captain;
  } catch (error) {
    throw new Error(error.message);
  }
};
