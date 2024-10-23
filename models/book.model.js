const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      reqiure: true,
    },
    genre: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: false,
    },
    status: {
      type: String,
      require: true,
    },
    // startDate: {
    //     type: Date,
    //     require: false
    // },
    // finishDate: {
    //     type: Date,
    //     require: false
    // }
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
