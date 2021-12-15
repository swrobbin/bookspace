import React, { useState, useContext } from 'react'
import { Routes, useParams } from "react-router-dom"
// import BookForm from "./BookForm"
import BookLinks from "./BookLinks"

import { UserContext } from "../context/user"


const Books = () => {
    const { books, loggedIn } = useContext(UserContext);
    // const [formFlag, setFormFlag] = useState(false)
    const params = useParams();

    if(loggedIn){
        const bookIndex = books.map((b) => <li><BookLinks key={b.id} book={b}/></li>)
        return (
            <div>
                <p>Books:</p>
                <ul>
                    {bookIndex}
                </ul>
            </div>
        )
    } else {
        return (
            <h3>Not Authorized - Please Signup or Login to view this page.</h3>
        )
    }
    
}

export default Books
