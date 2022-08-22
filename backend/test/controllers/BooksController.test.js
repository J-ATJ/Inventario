const BooksController = require("../../lib/contollers/BooksController");

describe("Testing BooksController", () => {

  test("Recovering data", () => {
    const books = BooksController.BooksView();
    expect(books.length).toBe(116);
  });

});