import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-us">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <p>Have questions? Get in touch with us.</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
