const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const UserController = require('./lib/contollers/UsersController');
const BookController = require('./lib/contollers/BooksController');

const Bookmodel = require('./lib/models/Book');
const UserModel = require('./lib/models/User');

const corsOptions = {
  origin: 'http://127.0.0.1',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.get("/user/signout", cors(corsOptions), (req, res) => {
  //delete user token
  const userSignout = UserController.userSignout();
  res.status(200).send('Goodbye');
});

app.post("/user/signin", cors(corsOptions), (req, res) => {
  //create user token
  const userSignin = UserController.UserSignin(
    new UserModel({
      "name": req.body.name,
      "pass": req.body.pass
    })
  );
  res.status(200).send('Correct SignIn');
});

app.post("/user/signup", cors(corsOptions), (req, res) => {
  //create user token
  const userSignup = UserController.UserSignup(
    new UserModel({
      "name": req.body.name,
      "pass": req.body.pass
    })
  );
  res.status(200).send('Correct SignUp');
});

app.get("/books/search/:title", cors(corsOptions), (req, res) => {
  const title = req.params.title;
  if (title == 'hola') res.status(404).json({'error': 'No se encontro'});
  const bookController = BookController.BookSearch(title);
  res.status(200).json(bookController);
});

app.post("/books/add", cors(corsOptions), (req, res) => {
  const bookController = BookController.BookAdd(
    new Bookmodel({
      "title": req.body.title,
      "authors": req.body.authors,
      "description": req.body.description,
      "price": req.body.price,
      "stock": req.body.stock,
      "genre": req.body.genre,
      "image": req.body.image
    })
  );
  res.status(200).send('book added!');
});

app.put("/books/edit", cors(corsOptions), (req, res) => {
  const bookController = BookController.BookEdit(
    req.body.id,
    new Bookmodel({
      "title": req.body.title,
      "authors": req.body.authors,
      "description": req.body.description,
      "price": req.body.price,
      "stock": req.body.stock,
      "genre": req.body.genre,
      "image": req.body.image
    })
  );
  res.status(200).send('book edited!');
});

app.delete("/books/delete", cors(corsOptions), (req, res) => {
  const bookController = BookController.bookDelete(req.body.id);
  res.status(200).send('book deleted!');
});

app.get("/books/", cors(corsOptions), (req, res) => {
  const bookView = BookController.BooksView();
  res.status(200).json(bookView);
});

app.listen(port, () => console.log(`Server started at port ${port}`));
