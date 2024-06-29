import mongoose, { Schema } from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: "CartItems"
  }],
  total: {
    type: Number
  }
});

export const Cart = mongoose.model("Cart", cartSchema);