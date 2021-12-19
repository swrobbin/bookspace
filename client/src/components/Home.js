import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import { Link } from 'react-router-dom'

const Home = () => {
    const { loggedIn } = useContext(UserContext)
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
                <br/>
                <br/>
                <h1>Welcome to Bookspace!</h1>
                <br/>
                <h2>This is a virtual place to keep track of your BEST reads.</h2>
                <br/>
                <h3>To view your book collection click the Your Books tab above or, click <Link to='/books'><button className="button"><em>here!</em></button></Link></h3>
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
