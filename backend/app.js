const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());

const UserController = require('./lib/contollers/UsersController');
const BookController = require('./lib/contollers/BooksController');

app.get("/", (req, res) => {
  res.send('Hola backend');
});

app.get("/user/signout", (req, res) => {
  const userSignout = UserController.userSignout();
  res.send('<json model>');
  //response.json(userSignout);
});

app.post("/user/signin", (req, res) => {
  const userSignin = UserController.userSignin();
  res.send('<json model>');
  //response.json(userSignin);
});

app.get("/user/signout", (req, res) => {
  res.send('<json model>');
});

app.post("/user/signup", (req, res) => {
  res.send('<json model>');
});

app.get("/books/search/:item", (req, res) => {
  res.send('<json model>');
});

app.post("/books/add", (req, res) => {
  res.send('<json model>');
});

app.post("/user/edit", (req, res) => {
  res.send('<json model>');
});

app.get("/books/delete", (req, res) => {
  res.send('<json model>');
});

app.get("/books/", (req, res) => {
  const bookView = BookController.BooksView();
  res.json(bookView);
});

app.listen(port, () => console.log(`Server started at port ${port}`));
