const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWT_MY_SECRET = process.env.JWT_MY_SECRET;

const authenticationMiddleware = async (req, res, next) => {
  try {
    const headerToken = await req.headers.authorization;
    // console.log(headerToken,'haha')
    // if (!headerToken)
    // throw new Error("Missing access token in request's header");
   
      const token = headerToken.split(" ")[1];
      // console.log(token, 'token')
      const decrypted = jwt.verify(token, JWT_MY_SECRET);
      const user = await User.findById(decrypted._id);
      req.currentUser = user;
      next();
    
  } catch (error) {
    next(error);
  }
};

module.exports = authenticationMiddleware;