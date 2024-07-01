import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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
  cart: {
    type: Schema.Types.ObjectId,
    ref: "Carts"
  }
}, {timestamps: true});

//hash pwd before saving
userSchema.pre("save", async function(next){
  //pwd is not modified
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

userSchema.plugin(mongooseAggregatePaginate);

const User = mongoose.model("User", userSchema);

export default User; 
