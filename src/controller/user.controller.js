import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js"

const registerUser = asyncHandler(async (req, res) => {
  //get payload from body
  const {name, email, password} = req.body;
  //check if user exists
  const existingUser = User.findOne({email});
  if(existingUser){
    res.status(409).json({
      message: "user email already exists"
    });
  };


  return res.status(200).json({
    message: "ok",
  })
});

export {registerUser}