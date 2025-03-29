// src/pages/Testimonials.jsx
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Testimonials = () => {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <section className="testimonials">
          <h2>What Parents and Students are Saying</h2>
          <blockquote>
            <p>"Home-Line Academy has transformed our homeschooling experience. The teacher support is fantastic, and the curriculum is both challenging and engaging."</p>
            <cite>- Parent</cite>
          </blockquote>
          <blockquote>
            <p>"I love the flexibility of learning at my own pace and the support from my teachers."</p>
            <cite>- Student</cite>
          </blockquote>
          <blockquote>
            <p>"The biblical integration in the curriculum has been a great fit for our family."</p>
            <cite>- Parent</cite>
          </blockquote>
          <Link to="/contact" className="btn">Contact Us to Submit Your Testimonial</Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Testimonials