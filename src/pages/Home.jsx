// src/pages/Home.jsx
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <section className="hero">
          <h2>Unlock Your Child's Potential with Personalized Homeschool Education</h2>
          <p>Experience accredited K-12 curriculum, expert teacher support, and a biblical worldview - all from the comfort of your home.</p>
          <Link to="/demo" className="btn">Request a Free Demo Today!</Link>
        </section>
        <section className="features">
          <h3>Why Choose Home-Line Academy?</h3>
          <ul>
            <li><strong>Expert Teacher Support:</strong> Our qualified teachers are here to provide guidance and support every step of the way.</li>
            <li><strong>Accredited Curriculum:</strong> We offer an accredited curriculum that meets international standards.</li>
            <li><strong>Biblical Worldview:</strong> Our curriculum integrates biblical principles, providing a values-based education.</li>
            <li><strong>Personalized Learning:</strong> We tailor the learning experience to meet each student's individual needs.</li>
            <li><strong>Flexible and Convenient:</strong> Learn from the comfort of your home at your own pace.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home