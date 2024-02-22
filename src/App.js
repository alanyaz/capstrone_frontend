import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/login';
import Signup from './pages/signup';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<div><h2 style={{textAlign : "center" , margin : "2rem"}}>Home Page</h2></div>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;
