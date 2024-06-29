import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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
userSchema.pre("save", async function(next){
  if(!this.isModified("password")){
    return next();
  };
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//method to verify pwd
userSchema.methods.isPasswordCorrect = async function(password){
  return await bcrypt.compare(password, this.password);
};

//method to generate token
userSchema.methods.generateAccessToken = async function(){
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

const User = mongoose.model("User", userSchema);

export default User; 
