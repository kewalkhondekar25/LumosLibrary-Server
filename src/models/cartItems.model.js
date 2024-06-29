import mongoose, { Schema } from "mongoose";

const cartItemsSchema = new mongoose.Schema({
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Cart"
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Books"
  },
  quantity: {
    type: Number
  }
});

export const CartItems = mongoose.model("CartItems", cartItemsSchema);