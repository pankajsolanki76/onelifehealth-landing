import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
