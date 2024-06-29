import mongoose from "mongoose";

const ReviewsSchema = new mongoose.Schema({
  reviewer: {
    type: String,
    required: true
  },
  comments: {
    type: String,
    required: true
  }
});

export const Reviews = mongoose.model("Reviews", ReviewsSchema);