import mongoose, { Schema } from "mongoose"

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true, 
  },
  password: {
    type: String,
    required: true
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: "Order"
  }]
}, {timestamps: true});

export const Users = mongoose.model("Users", usersSchema);
