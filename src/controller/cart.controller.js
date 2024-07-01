//add books in cart
//get books from cart
//remove books from cart
import { Cart } from "../models/cart.model.js";
import asyncHandler from "../utils/asyncHandler.js";



const addToCart = asyncHandler(async (req, res) => {
  const {id: bookId} = req.params;
  const email = "tanjiro@gmail.com"
  // const user = await Cart.findOne({});
  console.log(req.user);
  // console.log();
})

export {
  addToCart
}