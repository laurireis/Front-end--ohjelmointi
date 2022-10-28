import React from "react";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/about">About</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
