import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const UserContext = React.createContext();

function UserProvider({ children }){
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [books, setBooks] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            debugger
            setUser(data)
            if (data.error) {
                console.log(data.error)
                setLoggedIn(false)
            } else {
                setLoggedIn(true)
                fetchBooks()
            }  
        })
    }, [])

    const fetchBooks = () => {
        fetch('/books')
        .then(res => res.json())
        .then(data => {
            setBooks(data)
        })
    }

    const addBook = (book) => {
        fetch('/books', {
            method: "POST", 
            headers: {"Content-Type" : "application/json"}, 
            body: JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data => {
            setBooks([...books, data])
            navigate('/books')
        })
    }


    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchBooks()
    }

    const logout = () => {
        setLoggedIn(false)
        setUser({})
        setBooks([])  
    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }

    const onDelete = (id) => {
        fetch(`/books/${id}`, 
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"}   
        })
        .then(() => {
            const book = books.find((b) => b.id === parseInt(id))
            let updatedBooks = books.filter(b => b.id !== parseInt(book.id))
            setBooks(updatedBooks)
        })
    }

    const onUpdate = (editedBook) => {
        const editedBooks = books;
        const updatedBooks = editedBooks.map((book) => {
            if (book.id !== editedBook.id) {
                return book
            } else {
                return editedBook
            }
        })
        setBooks(updatedBooks)
    }

    return (
        <UserContext.Provider value={{user, login, addBook, logout, signup, loggedIn, books, onDelete, onUpdate }}>
            {children}
        </UserContext.Provider>
    );
}
export { UserContext, UserProvider };