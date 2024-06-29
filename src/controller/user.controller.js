import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js"

const registerUser = asyncHandler(async (req, res) => {

  const {name, email, password} = req.body;

  const existingUser = await User.findOne({email});
  if(existingUser){
    return res.status(409).json({
      message: "user email already exists"
    });
  };
  const user = await User.create({
    name,
    email,
    password
  });
  
  const createdUser = await User.findById(user._id).select("-password");
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