import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"

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

export const Users = mongoose.model("Users", usersSchema);
