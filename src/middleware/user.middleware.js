import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const verifyJWT = asyncHandler(async (req, res, next) => {
  //try-catch?
  try {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    console.log(token);
    if(!token){
      return res.status(401).json({
        message: "Unauthorized Request"
      });
    };
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select("-password");
    if(!user){
      return res.status(401).json({
        message: "Invalid Access Token"
      });
    };
    //add user obj to req
    req.user = user;
    // console.log(user);
    next();
  } catch (error) {
    console.log(error);
  }
});

export default verifyJWT;