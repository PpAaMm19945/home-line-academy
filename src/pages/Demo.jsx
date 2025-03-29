// src/pages/Demo.jsx
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Demo = () => {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <section class="demo">
          <h2>Schedule Your Free Demo</h2>
          <p>Experience the Home-Line Academy difference firsthand. Fill out the form below to schedule your free demo and learn more about our curriculum, teacher support, and personalized learning approach.</p>
          <form action="https://calendly.com/homelineacademy/demo" method="get">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required>
            <label for="date">Preferred Date:</label>
            <input type="date" id="date" name="date" required>
            <button type="submit" class="btn">Schedule Demo</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Demo