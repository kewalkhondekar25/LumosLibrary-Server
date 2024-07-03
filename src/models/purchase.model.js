import mongoose, { Schema } from "mongoose";

const purchaseSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: "Cart"
  }],
  address: {
    type: String,
    required: true
  },
  payment: {
    type: String,
    required: true
  },
  delivery: {
    type: String,
    required: true
  },
  itemsCount: {
    type: Number,
    required: true
  },
  purchaseTotal: {
    type: Number,
    required: true
  },
}, {timestamps: true});

const Purchase = mongoose.model("Purchase", purchaseSchema);
export default Purchase; 