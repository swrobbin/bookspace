import React, { useState, useContext } from 'react'
import { UserContext } from "../context/user"

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [pages, setPages] = useState('')
    const [notes, setNotes] = useState('')
    const { addBook } = useContext(UserContext);


    const handleSubmit = (e) => {
        e.preventDefault()
        addBook({
            title: title, 
            author: author, 
            pages: pages, 
            notes: notes    
        })
    }
    return (
        <div>
            <br/>
            <p>Add a new book below:</p>
            <br/>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <br/>
                <input type="text" value={title} id="title" onChange={(e) => setTitle(e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <label>Author</label>
                <br/>
                <input type="text" value={author} id="author" onChange={(e) => setAuthor(e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <label>Number of Pages</label>
                <br/>
                <input type="text" value={pages} id="pages" onChange={(e) => setPages(e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <label>Notes</label>
                <br/>
                <textarea type="text" id="notes" rows="10" cols="50" value={notes}  onChange={(e) => setNotes(e.target.value)}/>
                <br/>
                <br/>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default BookForm
