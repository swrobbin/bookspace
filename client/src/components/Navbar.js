import React, { useContext } from 'react';
import { UserContext } from "../context/user";
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { logout, loggedIn, user } = useContext(UserContext)
    const navigate = useNavigate()

    const logoutUser = () => {
        fetch('/logout', {
            method: "DELETE", 
            headers: { 'Content-Type' : 'application/json'}
        })
        .then(() => {
            logout()
            navigate('/')
        })
    }

    if (loggedIn){
        return (
            <div>
                <br/>
                <br/>
                <NavLink to='/'>
                    <button>Home</button>    
                </NavLink>
              
                <NavLink to='/books'>
                    <button>Your Books</button>    
                </NavLink>
              
                <NavLink to='/books/new'>
                    <button>Add Book</button>    
                </NavLink>
              
                <button onClick={logoutUser}>Logout {user.username}</button>
            </div>
        )
    } else {
        return (
            <div>
                <h2>BOOKSPACE</h2>
            </div>
        )
    }
    
}

export default Navbar
