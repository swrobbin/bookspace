import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;