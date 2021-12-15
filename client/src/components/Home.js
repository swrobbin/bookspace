import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { Link } from 'react-router-dom'

const Home = () => {
    const { user, loggedIn } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useContext(UserContext);

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: "POST", 
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                username: username, 
                password: password
            })
        })
        .then(res => res.json())
        .then((user) => {
            login(user)
        })
    }     

    if (loggedIn){
        return (
            <div>
                <h2>Hello {user.username}</h2>
                <h3>Welcome to bookspace, a virtual place to keep track of {user.username}'s BEST reads.</h3>
                <h4>Add a new book <button><em>here</em></button></h4>
            </div>)
    } else {
        return (
            <>
                <br/>
                <h3>Please Login  or   <Link to='/signup'><button>Signup</button></Link></h3> 
                <form onSubmit={handleLoginSubmit}>
                    <label>Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <br/>
                    <label>Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <br/>
                    <br/>
                    <input type="submit"/>
                </form> 
            </>)
    }  
}

export default Home
