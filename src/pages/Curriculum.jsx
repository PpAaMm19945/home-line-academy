// src/pages/Curriculum.jsx
import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Curriculum = () => {
  return (
    <div>
      <Header />
      <Nav />
      <main>
        <section className="curriculum">
          <h2>Our Comprehensive Curriculum</h2>
          <p>
            Home-Line Academy offers a wide range of courses for students in
            grades K-12, covering core subjects and electives.
          </p>
          <h3>Grade Level Breakdown</h3>
          <ul>
            <li>
              <strong>Kindergarten:</strong> Introduction to reading, writing,
              math, and social studies.
            </li>
            <li>
              <strong>Elementary School:</strong> Basic literacy and numeracy
              skills, science, and social studies.
            </li>
            <li>
              <strong>Middle School:</strong> Advanced subjects including
              algebra, biology, and history.
            </li>
            <li>
              <strong>High School:</strong> College preparatory courses,
              including calculus, chemistry, and literature.
            </li>
          </ul>
          <h3>Teacher Support</h3>
          <p>
            Our teachers provide online tutoring, email support, and regular Q&A
            sessions to ensure students receive the guidance they need.
          </p>
          <h3>Assessment and Reporting</h3>
          <p>
            We use a variety of assessment methods to track student progress and
            provide detailed reports to parents.
          </p>
          <h3>Biblical Integration</h3>
          <p>
            Our curriculum integrates biblical principles, providing a
            values-based education that aligns with your family's beliefs.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Curriculum;
