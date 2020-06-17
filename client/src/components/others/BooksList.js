import React from 'react';
import '../styles/BooksList.css';
import Book from './Book';

const BooksList = (props) => {
    return (
        <div className="booksListDiv">
            {props.books.map(book => {
                return (
                    <Book book={book} key={book.name}/>
                )
            })}
        </div>
    )
}

export default BooksList;
