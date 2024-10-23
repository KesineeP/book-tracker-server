const Book = require("../models/book.model");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getBooks,
  addBook,
  deleteBook
};
