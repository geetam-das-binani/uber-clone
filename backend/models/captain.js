const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema(
  {
    fullName: {
      firstName: {
        type: String,
        required: true,
        minlength: [3, "First Name is too short"],
      },
      lastName: {
        type: String,
        minlength: [3, "Last Name is too short"],
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      minlength: [5, "Email is too short"],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    socketId: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    vehicle: {
      color: {
        type: String,
        required: true,
        minlength: [3, "Color is too short"],
      },
      plate: {
        type: String,
        required: true,
        minlength: [3, "Plate is too short"],
      },
      capacity: {
        type: Number,
        required: true,
        minlength: [1, "Capacity is too short"],
      },
      vehicleType: {
        type: String,
        enum: ["car", "auto", "motorcycle"],
        required: true,
      },
    },
    location: {
      lat: {
        type: Number,
      },
      long: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  },
);

captainSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.methods.generateJWT = function () {
  const user = this;
  const payload = {
    _id: user._id,
  };
  const options = {
    expiresIn: "24h",
  };
  return jwt.sign(payload, process.env.JWT_SECRET, options);
};

captainSchema.statics.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

module.exports = mongoose.model("Captain", captainSchema);
