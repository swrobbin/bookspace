 import React, { useContext } from 'react'
 import { UserContext } from "../context/user"
 import {useParams, useNavigate } from "react-router-dom"
 import BookEditLink from './BookEditLink'
 
 const Book = (props) => {

    let { id } = useParams();
    let navigate = useNavigate();
    const { books, loggedIn, onDelete } = useContext(UserContext);
    const book = books.find(b => b.id === parseInt(id))

    const handleDelete = (e) => {
        onDelete(e.target.id) 
        navigate('/books')   
    }

    if(loggedIn){
        return (
            <div>
                <br/>
                <br/>
                <h2>Title: {book.title}</h2>
                <br/> 
                <h3>Author: {book.author}</h3>
                <br/>
                <h4>Number of pages: {book.pages}</h4>
                <br/>
                <br/>
                <br/>
                <button id={book.id} onClick={handleDelete}>Delete</button>
                <BookEditLink book={book} />
            </div>
        )
    } else {
        const clickHandler = () => {
            navigate('/')
        }
        return (
            <h3>Not Authorized - Please <button onClick={clickHandler} >Login</button> to view this page.</h3>
        )
    }
}
export default Book
 