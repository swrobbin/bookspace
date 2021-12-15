import React from 'react'
import { Link } from 'react-router-dom';

const BookEditLink = ({book}) => {
    return (
        <div>
          <br/>
                <Link to={`/books/${book.id}/edit`}>
                   <button className='button'>Edit Book</button> 
                </Link>
            <br/>  
        </div>
    )
}

export default BookEditLink
