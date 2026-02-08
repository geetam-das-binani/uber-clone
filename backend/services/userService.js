const userModel = require("../models/user");
exports.createUser = async ({ firstName, lastName, email, password }) => {
  try {
    if (!firstName || !email || !password) {
      throw new Error("Please provide all the required fields");
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
    throw new Error("User already exists");
    }

    const user = await userModel.create({
      fullName: {
        firstName,
        lastName,
      },
      email,
      password,
    });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.authLogin = async ({ email, password }) => {
  try {
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      throw new Error("Invalid email or password");
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      throw new Error("Invalid email or password");
    }
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
