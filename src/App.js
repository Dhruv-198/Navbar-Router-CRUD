import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Shop from './Component/Shop';
import Blog from './Component/Blog';
import About from './Component/About';
import Contact from './Component/Contact';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;