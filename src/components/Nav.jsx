// src/components/Nav.jsx
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/curriculum">Curriculum</Link>
        </li>
        <li>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/demo">Demo Sign-Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
