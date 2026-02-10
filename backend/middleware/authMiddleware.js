const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
exports.isLoggedIn = async (req, res, next) => {
  const token = req.cookies.token  || req.headers.authorization.split(" ")[1];
 
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await userModel.findById(decoded._id);
      
      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(401).json({ error: "Invalid token" });
      }
    } catch (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
  } else {
    return res.status(401).json({ error: "No token provided" });
  }
};
