import mongoose, { Schema } from "mongoose";

const BookSchema = new mongoose.Schema({
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
    type: [String],
    required: true
  },
  ratings: {
    type: Number,
    required: true
  }
});

const Book = mongoose.model("Book", BookSchema);

export default Book; 