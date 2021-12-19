import React, { useContext } from 'react';
import { UserContext } from "../context/user";
import { Link, useNavigate } from 'react-router-dom';

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
            <div className={"navbar"}>
                <Link to='/'  style={{ textDecoration: 'none', padding: "10px" }}>
                    Home   
                </Link>
                <Link to='/books' style={{ textDecoration: 'none' }}>
                    Your Books   
                </Link>
                <button   className="button" onClick={logoutUser}>Logout {user.username}</button>
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
