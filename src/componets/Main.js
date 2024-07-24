import React from 'react';
import './Main.css';

function Main() {
  return (
    <main className="Main">
      <section className="hero">
        <h2>Welcome to One Life Health Care</h2>
        <p>Your mental health is our priority. Join us for a journey to better well-being.</p>
        <button>Get Started</button>
      </section>
      <section id="about" className="about">
        <h2>About Us</h2>
        <p>One Life Health Care is dedicated to providing the best mental health services globally.</p>
      </section>
      <section id="services" className="services">
        <h2>Our Services</h2>
        <p>We offer a range of mental health services to support your well-being.</p>
      </section>
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us to learn more about our services.</p>
      </section>
    </main>
  );
}

export default Main;
