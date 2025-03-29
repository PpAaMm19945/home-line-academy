// src/pages/Contact.jsx
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <section class="contact">
          <h2>Get in Touch</h2>
          <p>Have questions or need more information? Reach out to us using the form below or contact us directly.</p>
          <form action="submit_form.php" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <button type="submit" class="btn">Send Message</button>
          </form>
          <div class="contact-info">
            <p><strong>Phone:</strong> +256 123 456 789</p>
            <p><strong>Email:</strong> info@homelineacademy.com</p>
            <p><strong>Address:</strong> 123 Homeschool Street, Kampala, Uganda</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Contact