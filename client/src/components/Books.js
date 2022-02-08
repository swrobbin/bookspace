import React, { useContext } from 'react'
import BookLinks from "./BookLinks"
import { useNavigate, Link } from 'react-router-dom';
import { UserContext } from "../context/user"


const Books = () => {
    const { books, loggedIn, user } = useContext(UserContext);

    const navigate = useNavigate()

    if(loggedIn){
            // debugger
            const booksIndex = books.map(b => <li><BookLinks key={b.id} book={b}/></li>)
    
        
        return (
            <div>
                <br/>
                <br/>
                <h1>{user.username}'s books:</h1>
                <ul>
                    {booksIndex}
                </ul>
                <Link to='/books/new'>
                    <button  className="button">Add Book</button>    
                </Link>
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

export default Books
