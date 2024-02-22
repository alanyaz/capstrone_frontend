import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/login';
import Signup from './pages/signup';
import Contact from './pages/contact';
import HomePage from './pages/homepage';
import ProductDetails from './pages/productDetails';


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
    </Router>
  );
}

export default App;
