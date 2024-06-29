import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

//hash pwd before saving
usersSchema.pre("save", async function(next){
  if(!this.isModified("password")){
    return next();
  };
  this.password = bcrypt.hash(this.password, 10);
});

//method to verify pwd
usersSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password);
};

//method to generate token
usersSchema.methods.generateAccessToken = async function(){
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  ); 
};

export const Users = mongoose.model("Users", usersSchema);
