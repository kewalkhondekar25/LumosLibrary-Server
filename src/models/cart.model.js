import mongoose, { Schema } from "mongoose";

const cartSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  items: [{
    book: {
      type: Schema.Types.ObjectId,
      ref: "Book"
    },
    quantity: {
      type: Number,
      default: 1
    }
  }]
}, {timestamps: true});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart; 