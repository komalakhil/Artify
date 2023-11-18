const jwt = require("jsonwebtoken");
require("dotenv").config();

//verification mechanism
const adminVerifyToken = function (req, res, next) {
  //get Bearer token from req
  let bearerToken = req.headers.authorization;
  //check for bearer token
  if (bearerToken === undefined) {
    res.send({ message: "Unauthorizes access. Plz login" });
  } else {
    //get token from bearer token
    let token = bearerToken.split(" ")[1];
    try {
      //verify the token
      let decodedToken = jwt.verify(token, process.env.SECRET_ADMIN);
      //call next middleware
      next();
    } catch (err) {
      res.send({ message: "Invalid token. Plz relogin" });
    }
  }
};


//verification mechanism
const userVerifyToken = function (req, res, next) {
    //get Bearer token from req
    let bearerToken = req.headers.authorization;
    //check for bearer token
    if (bearerToken === undefined) {
      res.send({ message: "Unauthorizes access. Plz login" });
    } else {
      //get token from bearer token
      let token = bearerToken.split(" ")[1];
      try {
        //verify the token
        let decodedToken = jwt.verify(token, process.env.SECRET_USER);
        //call next middleware
        next();
      } catch (err) {
        res.send({ message: "Invalid token. Plz relogin" });
      }
    }
  };

module.exports = {adminVerifyToken,userVerifyToken};