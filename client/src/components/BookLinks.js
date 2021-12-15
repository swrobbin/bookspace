import React from 'react'
import { Link } from 'react-router-dom';
// import Book from "./Book"


const BookLinks = ({book}) => {
    return (
        <div>
            <Link to={`/books/${book.id}`}>
            <h3>{book.title}</h3>
            </Link>
        </div>
    )
}

export default BookLinks
