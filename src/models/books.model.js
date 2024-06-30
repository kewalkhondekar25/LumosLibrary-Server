import mongoose, { Schema } from "mongoose";

const BooksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: {
    type: [String]
  },
  ratings: {
    type: Number,
    required: true
  }
});

export const Books = mongoose.model("Books", BooksSchema);