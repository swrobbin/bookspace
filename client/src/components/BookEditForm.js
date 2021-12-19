import React, { useState, useContext } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { UserContext } from '../context/user'

const BookEditForm = () => {
    const [editedBook, setEditedBook] = useState({
        title: '',
        author: '', 
        pages: '', 
        notes:''
    })

    let { id } = useParams();
    let navigate = useNavigate();
    const { loggedIn, onUpdate, books } = useContext(UserContext);

    if (editedBook.title === ''){
        const bookToEdit = books.find((b) => b.id === parseInt(id))
        setEditedBook(bookToEdit)
    }

    const handleChange = (e) => {
        setEditedBook({
        ...editedBook, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/books/${editedBook.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(editedBook)    
        })
        .then(r => r.json())
        .then(data => {
            onUpdate(data)
            navigate(`/books/${editedBook.id}`)
        })
        }

        if (loggedIn){
            return (
                <div>
                    <br/>
                    <p>Edit your book below:</p>
                    <br/>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <label>Title</label>
                        <br/>
                        <input type="text" value={editedBook.title} name="title" onChange={handleChange}/>
                        <br/>
                        <br/>
                        <br/>
                        <label>Author</label>
                        <br/>
                        <input type="text" value={editedBook.author} name="author" onChange={handleChange}/>
                        <br/>
                        <br/>
                        <br/>
                        <label>Number of Pages</label>
                        <br/>
                        <input type="text" value={editedBook.pages} name="pages" onChange={handleChange}/>
                        <br/>
                        <br/>
                        <br/>
                        <label>Notes</label>
                        <br/>
                        <textarea type="text" id="notes" rows="10" cols="35" value={editedBook.notes} name="notes" onChange={handleChange}/>
                        <br/>
                        <br/>
                        <br/>
                        <input type="submit"/>
                    </form>
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

export default BookEditForm
