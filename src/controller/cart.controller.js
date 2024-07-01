import Book from "../models/book.model.js";
import Cart from "../models/cart.model.js";
import asyncHandler from "../utils/asyncHandler.js";

const addToCart = asyncHandler(async (req, res) => {
  const { id: bookId } = req.params;
  const userId = req.user._id;

  if (!bookId) {
    return res.status(404).json({ message: "No Book ID Found" });
  }

  const book = await Book.findById(bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  let userCart = await Cart.findOne({ owner: userId });
  if (!userCart) {
    userCart = new Cart({ owner: userId, items: [{ book: bookId, quantity: 1 }] });
  } else {
    //if book is already in cart
    const itemIndex = userCart.items.findIndex(item => item.book.toString() === bookId);

    if (itemIndex === -1) {
      //if book is not in the cart; add it with qty 1
      userCart.items.push({ book: bookId, quantity: 1 });
    } else {
      //if book is already in the cart, increase qty
      userCart.items[itemIndex].quantity += 1;
    }
  }

  const itemsAdded = await userCart.save();
  if (!itemsAdded) {
    return res.status(500).json({ message: "No Items were added" });
  }

  return res.status(201).json({
    message: "Book Added",
    data: itemsAdded
  });
});

const removeFromCart = asyncHandler(async (req, res) => {
  const { id: bookId } = req.params;
  const userId = req.user._id;

  if(!bookId){
    return res.status(404).json({ message: "No Book ID Found" });
  }

  const book = await Book.findById(bookId);
  if(!book){
    return res.status(404).json({ message: "Book not found" });
  }

  // users cart
  let userCart = await Cart.findOne({ owner: userId });

  if(!userCart){
    return res.status(404).json({ message: "Cart not found" });
  }

  //index of the book in the cart
  const itemIndex = userCart.items.findIndex(item => item.book.toString() === bookId);
  if(itemIndex === -1){
    return res.status(404).json({ message: "Book not found in cart" });
  }

  if(userCart.items[itemIndex].quantity > 1){
    userCart.items[itemIndex].quantity -= 1;
  }else{
    userCart.items.splice(itemIndex, 1);
  }

  const itemsRemoved = await userCart.save();
  if(!itemsRemoved){
    return res.status(500).json({ message: "No Items were removed" });
  }
  return res.status(200).json({
    message: "Book removed",
    data: itemsRemoved
  });
});

const getCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const userCart = await Cart.findOne({ owner: userId }).populate('items.book');
  if(!userCart){
    return res.status(404).json({ message: "Cart not found" });
  }
  res.status(200).json(userCart);
});

const deleteCart = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const deletedCart = await Cart.findOneAndDelete({ owner: userId });
  if(!deletedCart){
    return res.status(404).json({ message: "Cart not found" });
  }
  res.status(200).json({ message: "Cart deleted successfully" });
});

export {
  addToCart,
  removeFromCart,
  getCart,
  deleteCart
}