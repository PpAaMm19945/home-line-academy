// src/components/Header.jsx
import React from 'react'
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Home-Line Academy Logo" className="logo" />
      <h1>HOME-LINE ACADEMY</h1>
      <p>Blended Learning</p>
    </header>
  )
}

export default Header