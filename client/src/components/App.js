import './App.css';
import { UserProvider } from './context/user';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
 

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </UserProvider>
      
    </div> 
  );
}

export default App;
