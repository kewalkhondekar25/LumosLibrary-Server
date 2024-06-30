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
  if(!book){
    return res.status(404).json({
      message: "Books Not Found"
    })
  }
  return res.status(201).json({
    message: "Created",
    data: book
  });
});

const getSingleBook = asyncHandler(async (req, res) => {
  const {id: bookId} = req.params
  if(!req.params){
    return res.status(404).json({
      message: "ID Not Found"
    });
  };
  const book = await Books.findOne({_id: bookId});
  if(!book){
    return res.status(404).json({
      message: "No Book With Such ID Found"
    });
  };
  return res.status(200).json({
    message: "OK",
    data: book
  });
});

export {
  getAllBooks,
  uploadBooks,
  getSingleBook
}