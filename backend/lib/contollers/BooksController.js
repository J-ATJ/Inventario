const Reader = require("../services/reader");
const BooksService = require("../services/BooksService");

class BooksController {

  static BooksView() {
    const books = Reader.readJsonFile("books.json");
    return books;
  }

  static bookDelete() {
    return '';
  }

}
module.exports = BooksController;