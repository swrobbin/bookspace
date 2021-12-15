import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')
    const { addBook } = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault()
        addBook({
            title: title, 
            author: author, 
            pages: pages    
        })
    }
    return (
        <div>
            <p>BookForm</p>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" value={title} id="title" onChange={(e) => setTitle(e.target.value)}/>
                <br/>
                <label>Author:</label>
                <input type="text" value={author} id="author" onChange={(e) => setAuthor(e.target.value)}/>
                <br/>
                <label>Number of Pages:</label>
                <input type="text" value={pages} id="pages" onChange={(e) => setPages(e.target.value)}/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default BookForm
