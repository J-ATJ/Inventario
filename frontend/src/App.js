import './App.css';
import Book from './Components/Book';
import database from './pruebas/database.js';
function App() {
  return (
    <div className="App">
        <h1>Inventario</h1>
        <hr />
        <div>Buscar...</div>
        {
          database.data.books.map((book)=>
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
  );
}

export default App;
