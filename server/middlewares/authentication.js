const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const { AppError } = require("../helpers/utils.helper");
const Clinic = require("../models/Clinic");
const authMiddleware = {};

authMiddleware.loginRequired = (req, res, next) => {
  try {
    const tokenString = req.headers.authorization;
    if (!tokenString)
      return next(new AppError(401, "Login required", "Validation Error"));
    const token = tokenString.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET_KEY, (err, payload) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return next(new AppError(401, "Token expired", "Validation Error"));
        } else {
          return next(
            new AppError(401, "Token is invalid", "Validation Error")
          );
        }
      }
      // console.log(payload);
      req.userId = payload._id;
    });
    next();
  } catch (error) {
    next(error);
  }
};
authMiddleware.verifyAdmin = async (req, res, next) => {
  try {
    const currentUser = req.params.id;
    let admin = await Clinic.findOne({ _id: currentUser });
    if (!admin) {
      return next(new AppError(400, "admin not found", "check admin error"));
    }
    return sendResponse(
      res,
      200,
      true,
      { admin },
      null,
      "Create user successful"
    );
  } catch (error) {
    next(error);
  }
};
module.exports = authMiddleware;
