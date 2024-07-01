import mongoose, { Schema } from "mongoose";

const cartSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: "Book"
  }]
});

cartSchema.methods.addBook = async function(bookId){
  this.books = bookId;
}

export const Cart = mongoose.model("Cart", cartSchema);