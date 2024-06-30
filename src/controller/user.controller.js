import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js"

const generateAccessToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken();
    return accessToken;
  } catch (error) {
    throw new Error("something went wrong while generating access token");
  }
};

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

const loginUser = asyncHandler(async (req, res) => {
  const {email, password} = req.body;
  if(!email || !password){
    res.status(400).json({
      message: "email or password required"
    });
  }; 
  const user = await User.findOne({email});
  if(!user){
    return res.status(404).json({
      message: "user does not exist"
    });
  };
  const isPasswordValid = await user.isPasswordCorrect(password);
  if(!isPasswordValid){
    return res.status(401).json("invalid user credentials");
  };

  const loggedInUser = await User.findById(user._id).select("-password");
  const accessToken = await generateAccessToken(user._id);

  const cookieOptions = {
    httpOnly: true,
    secure: true
  };

  return res
  .status(200)
  .cookie("accessToken", accessToken, cookieOptions)
  .json({
    message: "User Logged In Successfully",
    data: loggedInUser,
    token: accessToken
  });
});

const logoutUser = asyncHandler(async (req, res) => {
  const options = {
    httpOnly: true,
    secure: true
  };
  return res
  .status(200)
  .clearCookie("accessToken", options)
  .json({
    message: "User Logged Out"
  })
});

export {
  registerUser,
  loginUser,
  logoutUser
}