import React from 'react'
import { Link } from 'react-router-dom';


const BookLinks = ({book}) => {
    return (
        <div>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={`/books/${book.id}`}>
            <h3>{book.title}</h3>
            </Link>
        </div>
    )
}

export default BookLinks
