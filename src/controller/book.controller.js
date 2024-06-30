import Books from "../models/books.model.js";
import asyncHandler from "../utils/asyncHandler.js";

const getAllBooks = asyncHandler(async (req, res) => {

  const books = await Books.find({});
  if(!books){
    return res.status(404).json({
      message: "404 Not Found"
    })
  }
  return res.status(200).json({
    message: "OK",
    data: books
  });
});

export {
  getAllBooks
}