import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Cart"
  },
  shippingAddress: {
    type: String,
    required: true,
    trim: true
  },
  paymentDetails: {
    type: String,
    required: true,
    trim: true
  },
  deliveryMethod: {
    type: String,
    required: true,
    trim: true
  }
}, {timestamps: true});

export const Order = mongoose.model("Order", orderSchema);