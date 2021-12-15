import React, { useState, useEffect } from 'react'

const UserContext = React.createContext();

function UserProvider({ children }){
    const [user, setUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(res => res.json())
        .then(data => {
            setUser(data)
            if (data.error) {
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
        })
    }


    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
    }
    const logout = () => {
        setLoggedIn(false)
        setUser({})
        
    }
    const signup = (user) => {
        setUser(user)
        setLoggedIn(true)
    }


    return (
        <UserContext.Provider value={{user, login, addBook, logout, signup, loggedIn }}>
            {children}
        </UserContext.Provider>
    );
}
export { UserContext, UserProvider };