class Book {
  constructor(book) {
    this.id = 0;
    this.state = 'created';
    this.title = book['title'];
    this.authors = book['authors'];
    this.description = book['description'];
    this.price = book['price'];
    this.stock = book['stock'];
    this.genre = book['genre'];
    this.image = book['image'];
  }
};

module.exports = Book;