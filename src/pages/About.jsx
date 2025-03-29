// src/pages/About.jsx
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <section className="about">
          <h2>About Home-Line Academy</h2>
          <p>Home-Line Academy is dedicated to providing high-quality, biblically integrated homeschool education. Founded by Godfrey Kyazze, our mission is to empower students to reach their full potential academically, spiritually, and socially.</p>
          <h3>Our Mission</h3>
          <p>To provide accessible, high-quality, and biblically integrated homeschool education that empowers students to reach their full potential.</p>
          <h3>Our Team</h3>
          <p>Meet our passionate team of educators and administrators who are committed to supporting parents and students in their homeschooling journey.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About