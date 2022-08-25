import './App.css';
import Book from './Components/Book';
import database from './pruebas/database.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import FormPOST from './Components/FormPOST.jsx';
import Search from './Components/Search.jsx';
import FormPUT from './Components/FormPUT.jsx';

function App() {
  return (
    <div className="App">
      <h1 className='text-center bg-light h1'>Inventario</h1>
      <div className='container forms'>
        <Search />
        <FormPOST />
        <FormPUT />
      </div>
      <div className='container'>
        {
          database.data.books.map((book) =>
            <Book
              title={book.title}
              price={book.price}
              author={book.author}
              description={book.description}
              genre={book.genre}
              stock={book.stock}
            />
          )
        }
      </div>

    </div>
  );
}

export default App;
