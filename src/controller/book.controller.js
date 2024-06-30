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

const uploadBooks = asyncHandler(async (req, res) => {
  const payload = req.body;
  if(!payload){
    return res.status(404),json({
      message: "Not Found"
    });
  };
  const book = await Books.create(payload);
  return res.status(201).json({
    message: "Created",
    data: book
  });
});

const getSingleBook = asyncHandler(async (req, res) => {
  // req.params
})

export {
  getAllBooks,
  uploadBooks
}