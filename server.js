const express = require("express");
const mongoose = require("mongoose");
const Book = require('./models/book.model');
const booksRoute = require("./routes/books.route");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/books", booksRoute);

app.get("/", (req, res) => {
  res.send("Welcome to KK book tracker");
});

mongoose
  .connect(
    "mongodb+srv://dbAdmin:admin1234@booktrackerapi.fcxpl.mongodb.net/?retryWrites=true&w=majority&appName=BookTrackerAPI"
  )
  .then(() => {
    console.log("Connect to MongoDB");
    app.listen(port, () => {
      console.log(`KK book tracker server is running on port: ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });

module.exports = app;
