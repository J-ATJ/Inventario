import React from "react";
import "../Components-css/Book.css";

function Book(props){
  return(
    <div className='book'>
      <div className="cover">
        {/*Cover*/}
      </div>
      <div className="info">
        <div className="title">{props.title}</div>
        <hr />
        <div className="author">Autores: <span className="authorName">{props.author}</span></div>
        <div className="genre">Género: <span className="genreName">{props.genre}</span></div>
        <div className="price">Precio: <span className="priceNumber">${props.price}.00</span></div>
        <div className="stock">Stock: <span className="stockNumber">{props.stock}</span></div>
        <div className="description">"{props.description}"</div>
      </div>
      <div className="options">
        <div className="put button">Editar</div>
        <div className="delete button">Eliminar</div>
      </div>
    </div>
  )
}

export default Book;