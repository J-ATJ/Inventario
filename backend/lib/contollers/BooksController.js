const Reader = require("../services/reader");
const BooksService = require("../services/BooksService");
const BookModel = require("../models/Book");

class BooksController {

  static BooksView() {
    const books = Reader.readJsonFile("books.json");
    return books;
  }

  static BookAdd(book) {
    console.log(book);
    return '';
  }

  static BookEdit(id, book) {
    console.log(`id: ${id}`);
    console.log(book);
    return '';
  }

  static BookSearch(title) {
    return {
      "id": 1,
      "title": title,
      "authors": "3",
      "description": "4",
      "price": 0.0,
      "stock": 6,
      "genre": "7",
      "image": "8"
    };
  }

  static bookDelete(id) {
    console.log(`id: ${id}`);
    return '';
  } 

}

module.exports = BooksController;