const captainModel = require("../models//captain");
const jwt = require("jsonwebtoken");
const BlacklistToken = require("../models/blacklisttoken");
exports.isLoggedIn = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (token) {
    try {
      const blacklistToken = await BlacklistToken.findOne({ token });
      if (blacklistToken) {
        return res.status(401).json({ error: "UnAuthorized" });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const captain = await captainModel.findById(decoded._id);

      if (captain) {
        req.captain = captain;
        next();
      } else {
        return res.status(401).json({ error: "UnAuthorized" });
      }
    } catch (err) {
      return res.status(401).json({ error: "UnAuthorized" });
    }
  } else {
    return res.status(401).json({ error: "UnAuthorized" });
  }
};
