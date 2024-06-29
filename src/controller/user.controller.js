import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js"

const registerUser = asyncHandler(async (req, res) => {
  //get payload from body
  const {name, email, password} = req.body;
  //check if user exists
  const existingUser = await User.findOne({email});
  // throw error if exist
  if(existingUser){
    return res.status(409).json({
      message: "user email already exists"
    });
  };
  //create entry in db
  const user = await User.create({
    name,
    email,
    password
  });
  //check if entry created & remove pwd from it
  const createdUser = await User.findById(user._id).select("-password");
  //check if createdUser exist
  if(!createdUser){
    return res.status(500).json({
      message: "something went wrong while registering user"
    });
  };

  return res.status(201).json({
    message: "user registered successful",
    data: createdUser
  })
});

export {registerUser}