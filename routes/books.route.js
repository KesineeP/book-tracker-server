const express = require("express");
const Book = require("../models/book.model");
const router = express.Router();
const {
  getBooks,
  addBook,
  deleteBook,
  updateBook,
} = require("../controllers/book.controller");

router.get("/", getBooks);
router.post("/", addBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook);

module.exports = router;
