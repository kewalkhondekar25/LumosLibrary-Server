import Cart from "../models/cart.model.js";
import asyncHandler from "../utils/asyncHandler.js";

const checkOut = asyncHandler(async (req, res) => {
  const userCart = await Cart.findOne({owner: req.user._id})
  if(!userCart){
    return res.status(404).json({
      message: "No Cart Found"
    })
  }
  return res.status(201).json({
    message: "Processing Order",
    data: userCart
  });
});

export {checkOut};