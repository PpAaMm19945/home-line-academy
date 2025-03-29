// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Curriculum from './pages/Curriculum.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'
import Demo from './pages/Demo.jsx'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Home-Line Academy</h1>
        <nav>
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/curriculum">Curriculum</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/demo">Demo Sign-Up</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2025 Home-Line Academy. All rights reserved.</p>
      </footer>
    </Router>
  )
}

export default App