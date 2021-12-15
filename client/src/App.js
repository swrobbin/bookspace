import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar';
import { UserProvider } from './context/user';
import Signup from './components/Signup';
import './App.css';
import Books from './components/Books'
import BookForm from './components/BookForm';
import Book from './components/Book';
import BookEditForm from './components/BookEditForm';



function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signup" element={<Signup/>}/>
          <Route exact path="/books" element={<Books/>}/>
          <Route path="/books/:id" element={<Book/>}/>
          <Route path="/books/:id/edit" element={<BookEditForm/>}/>
          <Route exact path="/books/new" element={<BookForm/>}/>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;